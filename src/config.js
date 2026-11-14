export const config = {
  name: 'Synapse',
  github: { handle: 'synapsedeveloperai', url: 'https://github.com/synapsedeveloperai' },
  email: 'synapse.developer.ai@gmail.com',
  discord: 'synapseaidev',
  socials: [], // Optional { label, url } entries; only https URLs are rendered.
  phrases: ['I build things for the web.', 'Exploring local AI systems.', 'Turning ideas into software.', 'Always testing something new.'],
  content: {
    status: 'Currently building',
    title: "Hi, I'm Synapse.",
    summary: "I work with software, local AI, and the systems behind them. This is a place for things I'm learning, experimenting with, and eventually releasing.",
    focus: [
      { title: 'AI & INFERENCE', heading: 'Models, tooling, and local AI.', description: 'Exploring the practical side of running models locally: inference, hardware constraints, workflows, and useful integrations.', code: "// current interests\nconst focus = [\n  'local LLMs',\n  'inference',\n  'automation'\n];", bullets: ['Local models', 'Inference pipelines', 'Model integration', 'Automation workflows'], symbol: '{ / }' },
      { title: 'FULL-STACK SYSTEMS', heading: 'Interfaces and the logic behind them.', description: 'Building and experimenting with web interfaces, services, APIs, and tools that connect the front end to the underlying system.', code: "// things I like building\nconst areas = {\n  frontend: 'web',\n  backend: 'services',\n  goal: 'make it work'\n};", bullets: ['Web interfaces', 'Backend services', 'Typed APIs', 'System design'], symbol: '[ _ ]' },
    ],
    about: {
      lead: 'I like figuring out how software works, then seeing what I can build with it.',
      description: "Most of my time goes into learning by building, testing ideas, and exploring the intersection of software engineering and AI. I'm especially interested in local models, automation, and the tradeoffs involved in making software useful.",
      facts: [['Focus', 'Software / AI / Systems'], ['Interests', 'Local inference / Automation'], ['Approach', 'Build → Test → Iterate'], ['Portfolio', 'Work in progress']],
    },
    projects: { title: 'Nothing published here yet.', description: "I'm working on a few things behind the scenes. When there's something worth sharing, you'll find the code and details here." },
    toolsDescription: 'Technologies and topics I work with or am exploring.',
    tools: ['Python', 'JavaScript / TypeScript', 'React', 'HTML / CSS', 'Git', 'Linux', 'Local LLMs', 'Ollama', 'APIs', 'Automation', 'AI Inference'],
    contact: { title: "Let's connect.", description: "Want to talk software, AI, or something you're building?" },
  },
};
