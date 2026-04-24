"use client"

import { useEffect, useRef, useState } from "react"
import { ProjectPortals } from "@/components/project-portals"

function HeroPhrase({
  text,
  delay,
  className = "",
}: {
  text: string
  delay: string
  className?: string
}) {
  return (
    <span
      className={`hero-phrase ${className}`}
      style={{ ["--phrase-delay" as string]: delay }}
    >
      {[...text].map((ch, i) => (
        <span
          key={i}
          className="hero-letter"
          style={{ ["--i" as string]: i }}
          aria-hidden
        >
          {ch === " " ? "\u00a0" : ch}
        </span>
      ))}
    </span>
  )
}

function HeroPunct({
  delay,
  className = "",
}: {
  delay: string
  className?: string
}) {
  return (
    <span
      className={`hero-punct ${className}`}
      style={{ ["--phrase-delay" as string]: delay }}
      aria-hidden
    >
      .
    </span>
  )
}

export default function ComingSoon() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [lightIntensity, setLightIntensity] = useState(0.5)
  const [textShadow, setTextShadow] = useState("")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      setMousePos({ x, y })

      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const distFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
      const maxDist = Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2))
      const intensity = Math.max(0.3, 1 - (distFromCenter / maxDist) * 0.7)
      setLightIntensity(intensity)

      // Calculate shadow direction (opposite of light)
      const shadowX = (centerX - x) * 0.15
      const shadowY = (centerY - y) * 0.15
      const shadowBlur = 40 + (1 - intensity) * 60
      const glowIntensity = intensity * 0.8

      // Create multi-layered shadow and glow effect
      const shadows = [
        `${shadowX * 0.5}px ${shadowY * 0.5}px ${shadowBlur * 0.6}px rgba(100, 200, 255, ${glowIntensity * 0.4})`,
        `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(150, 100, 255, ${glowIntensity * 0.3})`,
        `${-shadowX * 0.3}px ${-shadowY * 0.3}px ${shadowBlur * 0.8}px rgba(100, 150, 255, ${glowIntensity * 0.2})`,
      ]
      setTextShadow(shadows.join(", "))
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Video autoplay may be blocked, that's okay
      })
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const glContext = canvas.getContext("webgl2", { alpha: true, antialias: true })
    if (!glContext) {
      console.warn("WebGL2 not supported")
      return
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Set clear color to transparent
    glContext.clearColor(0, 0, 0, 0)

    const vertexShader = `#version 300 es
      precision highp float;
      
      in vec3 position;
      in float life;
      
      uniform mat4 projection;
      uniform mat4 view;
      uniform vec2 mousePos;
      
      out float vLife;
      
      void main() {
        vLife = life;
        vec3 pos = position;
        
        vec2 screenPos = (pos.xy + 2.0) * 0.25;
        vec2 toMouse = mousePos - screenPos;
        float dist = length(toMouse);
        if (dist < 0.3) {
          pos.xy += normalize(toMouse) * (0.3 - dist) * 0.02;
        }
        
        gl_Position = projection * view * vec4(pos, 1.0);
        gl_PointSize = mix(3.0, 12.0, life);
      }
    `

    const fragmentShader = `#version 300 es
      precision highp float;
      
      in float vLife;
      out vec4 outColor;
      
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        
        float alpha = (1.0 - dist * dist) * vLife;
        
        // Gradient from cyan to purple
        vec3 color = mix(
          vec3(0.3, 0.8, 1.0),
          vec3(0.8, 0.3, 1.0),
          vLife
        );
        
        outColor = vec4(color, alpha * 0.8);
      }
    `

    // Compile shaders
    const compileShader = (source: string, type: number) => {
      const shader = glContext.createShader(type)
      if (!shader) return null
      glContext.shaderSource(shader, source)
      glContext.compileShader(shader)

      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error("Shader compile error:", glContext.getShaderInfoLog(shader))
        return null
      }
      return shader
    }

    const vShader = compileShader(vertexShader, glContext.VERTEX_SHADER)
    const fShader = compileShader(fragmentShader, glContext.FRAGMENT_SHADER)

    if (!vShader || !fShader) return

    // Create program
    const program = glContext.createProgram()
    if (!program) return
    glContext.attachShader(program, vShader)
    glContext.attachShader(program, fShader)
    glContext.linkProgram(program)

    if (!glContext.getProgramParameter(program, glContext.LINK_STATUS)) {
      console.error("Program link error:", glContext.getProgramInfoLog(program))
      return
    }

    glContext["useProgram"](program)

    // Create particle data
    const particleCount = 1500
    const positions = new Float32Array(particleCount * 3)
    const lives = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4
      lives[i] = Math.random()
    }

    // Create VAO and buffers
    const vao = glContext.createVertexArray()
    glContext.bindVertexArray(vao)

    const posBuffer = glContext.createBuffer()
    glContext.bindBuffer(glContext.ARRAY_BUFFER, posBuffer)
    glContext.bufferData(glContext.ARRAY_BUFFER, positions, glContext.DYNAMIC_DRAW)

    const posLoc = glContext.getAttribLocation(program, "position")
    glContext.enableVertexAttribArray(posLoc)
    glContext.vertexAttribPointer(posLoc, 3, glContext.FLOAT, false, 12, 0)

    const lifeBuffer = glContext.createBuffer()
    glContext.bindBuffer(glContext.ARRAY_BUFFER, lifeBuffer)
    glContext.bufferData(glContext.ARRAY_BUFFER, lives, glContext.DYNAMIC_DRAW)

    const lifeLoc = glContext.getAttribLocation(program, "life")
    glContext.enableVertexAttribArray(lifeLoc)
    glContext.vertexAttribPointer(lifeLoc, 1, glContext.FLOAT, false, 4, 0)

    // Get uniform locations
    const projLoc = glContext.getUniformLocation(program, "projection")
    const viewLoc = glContext.getUniformLocation(program, "view")
    const mouseLoc = glContext.getUniformLocation(program, "mousePos")

    // Create projection and view matrices
    const createProjectionMatrix = (fov: number, aspect: number, near: number, far: number) => {
      const f = 1.0 / Math.tan(fov / 2.0)
      const nf = 1.0 / (near - far)
      return new Float32Array([
        f / aspect,
        0,
        0,
        0,
        0,
        f,
        0,
        0,
        0,
        0,
        (far + near) * nf,
        -1,
        0,
        0,
        2 * far * near * nf,
        0,
      ])
    }

    const projMatrix = createProjectionMatrix(Math.PI / 4, canvas.width / canvas.height, 0.1, 100)
    const viewMatrix = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -2, 1])

    glContext.uniformMatrix4fv(projLoc, false, projMatrix)
    glContext.uniformMatrix4fv(viewLoc, false, viewMatrix)

    glContext.enable(glContext.BLEND)
    glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA)

    let time = 0
    const animate = () => {
      time += 0.016

      const normalizedMouseX = mousePos.x / canvas.width
      const normalizedMouseY = 1.0 - mousePos.y / canvas.height
      glContext.uniform2f(mouseLoc, normalizedMouseX, normalizedMouseY)

      // Update particle positions and lives
      for (let i = 0; i < particleCount; i++) {
        lives[i] -= 0.003
        if (lives[i] <= 0) {
          lives[i] = 1.0
          positions[i * 3] = (Math.random() - 0.5) * 4
          positions[i * 3 + 1] = (Math.random() - 0.5) * 4
          positions[i * 3 + 2] = (Math.random() - 0.5) * 4
        }

        // Apply smooth flowing movement
        positions[i * 3] += Math.sin(time * 0.3 + i * 0.1) * 0.003
        positions[i * 3 + 1] += Math.cos(time * 0.2 + i * 0.1) * 0.003
        positions[i * 3 + 2] += Math.sin(time * 0.25 + i * 0.1) * 0.002
      }

      glContext.bindBuffer(glContext.ARRAY_BUFFER, posBuffer)
      glContext.bufferSubData(glContext.ARRAY_BUFFER, 0, positions)

      glContext.bindBuffer(glContext.ARRAY_BUFFER, lifeBuffer)
      glContext.bufferSubData(glContext.ARRAY_BUFFER, 0, lives)

      glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT)
      glContext.drawArrays(glContext.POINTS, 0, particleCount)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      glContext.deleteProgram(program)
      glContext.deleteShader(vShader)
      glContext.deleteShader(fShader)
    }
  }, [mousePos])

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ background: "transparent" }} />

      <div className="absolute inset-0 gradient-bg z-0" />

      <div className="absolute inset-0 gradient-overlay z-0" />

      <div
        ref={lightRef}
        className="absolute pointer-events-none z-5"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: "400px",
          height: "400px",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, rgba(100, 200, 255, ${lightIntensity * 0.15}) 0%, rgba(150, 100, 255, ${lightIntensity * 0.08}) 30%, transparent 70%)`,
          filter: `blur(60px)`,
          transition: "all 0.05s ease-out",
        }}
      />

      {/* Background Video with reduced opacity */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/outer-space-stars-nebula-cosmic.jpg" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 animate-pulse-glow z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(100, 200, 255, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4"
        style={{
          filter: `brightness(${0.9 + lightIntensity * 0.2})`,
          transition: "filter 0.1s ease-out",
        }}
      >
        <div className="max-w-5xl px-4 text-left md:text-center">
          <h1
            aria-label="Product Manager. Fitness Coach. Rebel."
            className="hero-headline font-display tracking-tight text-foreground"
            style={{
              textShadow: textShadow,
              transition: "text-shadow 0.05s ease-out",
              filter: `drop-shadow(0 0 ${20 + lightIntensity * 30}px rgba(120, 180, 255, ${lightIntensity * 0.3}))`,
            }}
          >
            <span className="hero-line hero-line--1">
              <HeroPhrase text="Product Manager" delay="0.2s" />
              <HeroPunct delay="0.82s" />
            </span>
            <span className="hero-line hero-line--2">
              <HeroPhrase text="Fitness Coach" delay="1s" />
              <HeroPunct delay="1.52s" />
            </span>
            <span className="hero-line hero-line--3">
              <HeroPhrase text="Rebel" delay="1.65s" className="hero-rebel" />
              <HeroPunct delay="1.98s" className="hero-punct--rebel" />
              <span className="hero-caret" aria-hidden>
                |
              </span>
            </span>
          </h1>
        </div>

        <ProjectPortals />
      </div>
    </main>
  )
}
