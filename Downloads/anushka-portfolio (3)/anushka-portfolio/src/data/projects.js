export const projects = [
  {
    id: 'mini-c-compiler',
    image: 'minic.jpg', // e.g. '/screenshots/mini-c-compiler.png' — see README
    name: 'Mini C Compiler',
    hook: 'An end-to-end compiler pipeline for a C-like language, down to optimized LLVM IR.',
    description:
      'A compiler built from scratch: lexical analysis and parsing with Flex and Bison, AST construction, and semantic analysis with symbol table validation — then LLVM IR generation, optimized through LLVM\u2019s PassManager (O2 pipeline).',
    stack: ['Flex', 'Bison', 'C++', 'LLVM', 'Graphviz'],
    metric: { value: '90%', label: 'reduction in IR instruction count on test cases' },
    contribution:
      'Wrote every stage of the pipeline myself: the lexer and parser, the AST, semantic analysis with symbol-table validation, and the LLVM IR generation and optimization passes.',
    challenges:
      'Getting semantic analysis to catch real errors (not just parse errors) without a mature type system, and getting the optimization passes to produce IR that was both smaller and still verifiably correct.',
    result:
      'A working pipeline that takes C-like source to optimized LLVM IR, with CFG visualization via Graphviz so the program structure is actually inspectable, not a black box.',
    github: 'https://github.com/anushkad-8',
    demo: null,
    placeholder: 'compiler',
  },
  {
    id: 'reposensei',
    image: 'repo.jpg', // e.g. '/screenshots/reposensei.png' — see README
    name: 'RepoSensei',
    hook: 'Turning an unfamiliar codebase into an onboarding experience, not a scavenger hunt.',
    description:
      'A repo-onboarding platform that grew out of a real frustration: joining a shared repo mid-project usually means scattered context, unclear ownership, and merge conflicts nobody explained. RepoSensei gives new contributors a Git activity dashboard, contribution insights, and role-aware onboarding tasks instead of a blank README.',
    stack: ['React', 'Figma', 'WebRTC', 'Socket.IO'],
    stack: ['MongoDB','Docker', 'GPT-4o', 'Gemini Flash'],
    contribution:
      'Designed it as a full UX case study first — problem framing, a persona ("John," a new contributor overwhelmed by an unfamiliar repo), and design values around clarity of contribution over raw metrics — then built it as a working front end, not just a Figma file.',
    challenges:
      'Deciding what to actually show: dashboards default to raw metrics (commits, LOC), but those don\u2019t tell a new contributor anything useful about how the codebase actually works or where the technical debt lives.',
    result:
      'A Git Activity & Impact Statement screen (contributions-per-week, tech-stack breakdown, commit timeline) plus an onboarding flow, along with an exploratory AI pairing mode and commit-categorization layer evaluated across several model options.',
    github: null,
    demo: null,
    placeholder: 'reposensei',
  },
  {
    id: 'meridian',
    image: 'meridian.jpeg', // e.g. '/screenshots/meridian.png' — see README
    name: 'Meridian',
    hook: 'A multi-app platform for workplace equity, pitched for Samsung Solve for Tomorrow.',
    description:
      'A self-built platform aimed at women\u2019s workforce re-entry in India, reframed for Tier 2/3 cities and government scheme integration — with modules for re-entry planning and fair-pay awareness.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Flask', 'Gemini'],
    contribution:
      'Built reusable, shared UI components across Meridian\u2019s multiple modules, and wrote unit and component tests with React Testing Library.',
    challenges:
      'Being honest about where the AI actually adds value: RampUp\u2019s re-entry plans are currently template-based rather than a live model, and OutcomeEquity\u2019s fair-pay prediction is a heuristic, not a trained model — both flagged clearly rather than oversold in interviews.',
    result:
      'A working multi-module platform with a system-design narrative prepared for interview discussion, reframed around a concrete target population rather than a generic "equity app."',
    github: null,
    demo: null,
    placeholder: 'meridian',
  },
  {
    id: 'medicator',
    image: 'medicator.jpeg', // e.g. '/screenshots/medicator.png' — see README
    name: 'Medicator',
    hook: 'A QR-based automated prescription dispenser — hardware, database, and app in one loop.',
    description:
      'An automated prescription dispensing system that integrates embedded hardware with a database layer and a cloud-backed application, verifying prescriptions in real time before dispensing.',
    stack: ['React Native', 'MySQL', 'Arduino', 'Embedded Systems'],
    metric: { value: 'Published', label: 'Indian patent (hardware design)' },
    contribution:
      'Built the multi-tiered system end to end: real-time verification logic, hardware triggering, and secure data flow between the application layer and the microcontroller.',
    challenges:
      'Keeping the verification logic trustworthy across three tiers (app, database, hardware) that don\u2019t naturally share state — a failure in any one of them shouldn\u2019t silently dispense the wrong prescription.',
    result:
      'A working prototype with a published Indian patent covering the hardware design of the dispensing system.',
    github: null,
    demo: null,
    placeholder: 'medicator',
  },
  {
    id: 'expenseiq',
    image: 'expenseiq.jpg', // e.g. '/screenshots/expenseiq.png' — see README
    name: 'ExpenseIQ',
    hook: 'On-device expense categorization, fast enough to feel instant on a phone.',
    description:
      'A BERT-based Android app that categorizes expenses on-device, fine-tuned on a labeled dataset and converted to TFLite for fast, private, offline inference.',
    stack: ['TensorFlow', 'BERT', 'TFLite', 'SQLite', 'Android'],
    metric: { value: '~95ms', label: 'on-device inference at ~42MB model size' },
    contribution:
      'Fine-tuned TFBertForSequenceClassification (Adam, lr=5e-5, 3 epochs, ~5,000 samples) across six expense categories, then converted and optimized it for on-device TFLite inference with local SQLite storage.',
    challenges:
      'Validation accuracy on the held-out set was 100% — which is a red flag, not a bragging point, given the dataset size. Real-world accuracy, measured more conservatively, sits around 95%+.',
    result:
      'A published Indian patent and a working app that classifies expenses on-device in well under a tenth of a second.',
    github: null,
    demo: null,
    placeholder: 'expenseiq',
  },
]
