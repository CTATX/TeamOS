export type OperatingModule = {
  id: string
  name: string
  tagline: string
  description: string
  capabilities: string[]
  accent: string
}

export const operatingModules: OperatingModule[] = [
  {
    id: 'cos',
    name: 'COS Framework',
    tagline: 'Facts → Control Point → Executive Question → Action',
    description:
      'Applies the Chief-of-Staff operating lens to any incident, ambiguous problem, or executive question. Separates facts from hypotheses and surfaces the single highest-leverage control point.',
    capabilities: [
      'Fact vs. hypothesis separation',
      'Control-gap identification',
      'Executive framing',
      'Required next actions',
    ],
    accent: '#6366f1',
  },
  {
    id: 'executive',
    name: 'Executive Comms',
    tagline: 'Leadership-ready language, every time',
    description:
      'Converts facts, risks, decisions, and actions into crisp, outcome-focused updates for leadership briefings, decision memos, and stakeholder communication.',
    capabilities: [
      'Decision memos',
      'Leadership briefings',
      'Stakeholder updates',
      'Outcome-first phrasing',
    ],
    accent: '#0ea5e9',
  },
  {
    id: 'product',
    name: 'Product Operating Model',
    tagline: 'Outcomes over output',
    description:
      'Applies the Product/TPM operating model to requirements, roadmaps, and intake decisions with a focus on jobs-to-be-done and adoption.',
    capabilities: [
      'Requirements clarity',
      'Roadmap shaping',
      'Intake decisions',
      'Adoption metrics',
    ],
    accent: '#22c55e',
  },
  {
    id: 'people',
    name: 'People Leadership',
    tagline: 'Evidence-first people reviews',
    description:
      'Organizes evidence and structures language for annual reviews, SBI/VLP feedback, recognition, and promotion inputs — while the leader owns the evaluation.',
    capabilities: [
      'SBI/VLP feedback',
      'Review language',
      'Recognition',
      'Promotion inputs',
    ],
    accent: '#f59e0b',
  },
  {
    id: 'investigation',
    name: 'Investigation',
    tagline: 'Source-backed, before conclusions',
    description:
      'Searches evidence, separates facts from hypotheses, identifies control failures, and prepares source-grounded summaries for incidents and operating gaps.',
    capabilities: [
      'Evidence search',
      'Fact grounding',
      'Control-failure analysis',
      'Structured summaries',
    ],
    accent: '#ef4444',
  },
  {
    id: 'documentation',
    name: 'Documentation Evaluation',
    tagline: 'Track what strengthened or slipped',
    description:
      'Compares document versions against an authoritative baseline to identify what was preserved, strengthened, weakened, or lost across iterations.',
    capabilities: [
      'Version comparison',
      'Baseline diffing',
      'Delta tracking',
      'Preservation checks',
    ],
    accent: '#a855f7',
  },
]
