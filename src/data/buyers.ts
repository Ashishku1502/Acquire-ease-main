export type Buyer = {
  id: string;
  name: string;
  logo?: string;
  location: string;
  dealSize: string;
  sectors: string[];
  timeline: string;
  experience: string;
  proofOfFunds: boolean;
  rationale: string;
  structures: string[];
  tags: string[];
};

export const buyers: Buyer[] = [
  {
    id: "1",
    name: "BlueWave Capital",
    location: "Austin, TX",
    dealSize: "$2M–$10M",
    sectors: ["SaaS", "Marketplaces", "B2B Services"],
    timeline: "60–90 days",
    experience: "7 acquisitions completed",
    proofOfFunds: true,
    rationale: "Roll-up strategy across vertical SaaS with shared GTM playbooks.",
    structures: ["Majority", "Earn-out"],
    tags: ["Active", "Founder-friendly", "US only"],
  },
  {
    id: "2",
    name: "North Star Partners",
    location: "New York, NY",
    dealSize: "$5M–$25M",
    sectors: ["FinTech", "Data Platforms"],
    timeline: "90–120 days",
    experience: "3 acquisitions completed",
    proofOfFunds: true,
    rationale: "Platform + add-ons in data-heavy workflows.",
    structures: ["Minority", "Majority"],
    tags: ["Flexible", "Global"],
  },
  {
    id: "3",
    name: "Harbor Ridge Holdings",
    location: "San Diego, CA",
    dealSize: "$1M–$6M",
    sectors: ["Healthcare Services", "Compliance"],
    timeline: "45–75 days",
    experience: "Operator-led search, 10+ years industry ops",
    proofOfFunds: false,
    rationale: "Acquire and operate a single great SMB with steady cash flows.",
    structures: ["Majority"],
    tags: ["Search fund", "Team of 2"],
  },
];
