export const experience = [
  {
    id: 'accion-labs',
    image: 'image.png', // e.g. '/screenshots/accion-labs.png' — see README
    org: 'Accion Labs',
    title: 'Intelligent Document Processing',
    period: 'Industry Project',
    stack: ['Python', 'LangGraph', 'Vector DB', 'Graph DB'],
    problem:
      'Large sets of unstructured documents are hard to query reliably — plain vector search finds text that "sounds similar" but misses the structural relationships between pieces of information that actual business questions depend on.',
    contribution:
      'I contributed to a scalable pipeline for ingesting, chunking, and indexing large unstructured document sets, and to a hybrid retrieval system that combines vector search with graph-based traversal, so queries can reason over structured relationships instead of just semantic similarity.',
    engineering:
      'Built with LangGraph for orchestrating multi-step retrieval, a vector database for semantic search, and a graph database for structured traversal over entities and relationships extracted from the documents.',
    impact:
      'Iterated directly on feedback from Accion Labs\u2019 business stakeholders — shaping the retrieval logic around how the system was actually being queried in practice, not just benchmark accuracy.',
        link: 'https://github.com/anushkad-8/IDP_AccionLabs.git',
      placeholder: 'idp',
  },
  {
    id: 'barclays',
    image: 'barclays.jpeg', // e.g. '/screenshots/barclays.png' — see README
    org: 'Barclays',
    title: 'Sensitive Data Leakage Detection in Images',
    period: 'Industry Project',
    stack: ['Python', 'OCR', 'NLP', 'Computer Vision', 'Streamlit'],
    problem:
      'Fintech workflows move a lot of image-based documents. If personally identifiable information (PII) slips through unflagged, it\u2019s a compliance risk — but flagging too aggressively drowns real issues in false positives.',
    contribution:
      'On a 4-person team, I owned the OCR, NLP, and confidence-scoring section: extracting text from images (Tesseract), classifying it with spaCy/BERT-based NLP and regex pattern detection, then fusing those signals into a single weighted confidence score alongside a vision classification layer.',
    engineering:
      'The interesting problem wasn\u2019t detecting PII — it was scoring it correctly. I redesigned the confidence-scoring engine that fuses OCR, NLP, regex, and vision signals.',
    impact: 'Drove false positives to zero after the confidence-scoring redesign.',
    //metric: { value: '0', label: 'false positives after the redesign' },
    // note:
    //   'Still actively iterating on this: the OCR currently misses handwritten text, and the confidence engine sometimes mislabels *why* something is sensitive (e.g. tagging a normal date as a date of birth) even when the overall flag is right. Fixing root-cause mapping and building out the vision layer is ongoing work.',
    link: 'https://github.com/anushkad-8/Sensitivity_Detection_in_Images',
    placeholder: 'barclays',
  },
]
