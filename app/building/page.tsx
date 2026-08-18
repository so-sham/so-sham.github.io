import type { Metadata } from "next"
import { BuildingClient } from "@/components/building-client"

export const metadata: Metadata = {
  title: "Building — Shamitha Gowda",
}

export default function BuildingPage() {
  return <BuildingClient />
}
