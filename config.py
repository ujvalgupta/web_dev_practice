"""
config.py - Intent signals, companies, and fake research data
"""

# INTENT SIGNALS - 7 signals you care about
INTENT_SIGNALS = [
    {
        "signal_id": "hiring_ai",
        "name": "AI/ML Hiring",
        "keywords": ["AI engineer", "machine learning", "LLM", "neural", "deep learning"],
        "weight": 10,
        "category": "hiring"
    },
    {
        "signal_id": "hiring_sales",
        "name": "GTM Team Expansion",
        "keywords": ["sales engineer", "VP Sales", "account executive", "sales team"],
        "weight": 8,
        "category": "hiring"
    },
    {
        "signal_id": "funding",
        "name": "Recent Funding",
        "keywords": ["Series", "funding", "raised", "investment"],
        "weight": 9,
        "category": "funding"
    },
    {
        "signal_id": "product_launch",
        "name": "Product Launch",
        "keywords": ["launch", "release", "new feature", "announced"],
        "weight": 7,
        "category": "product"
    },
    {
        "signal_id": "agentic_ai",
        "name": "Agentic AI",
        "keywords": ["agent", "autonomous", "agentic", "multi-agent"],
        "weight": 10,
        "category": "technology"
    },
    {
        "signal_id": "news",
        "name": "Press Coverage",
        "keywords": ["news", "article", "announcement", "featured"],
        "weight": 5,
        "category": "news"
    },
    {
        "signal_id": "partnership",
        "name": "Strategic Partnership",
        "keywords": ["partnership", "collaboration", "acquired", "integration"],
        "weight": 8,
        "category": "partnership"
    },
]

# ICP COMPANIES - 10 companies to track
ICP_COMPANIES = [
    {"id": "001", "name": "OpenAI", "industry": "AI/LLM"},
    {"id": "002", "name": "Anthropic", "industry": "AI/LLM"}
    ]

# FAKE RESEARCH DATA
RESEARCH_DATA = {
    "OpenAI": """{
    "HIRING": "15 AI engineers, 5 sales engineers actively recruiting",
    "FUNDING": "Series D $100M raised (Jan 2026)",
    "PRODUCT": "Launched GPT-5, new fine-tuning capabilities",
    "NEWS": "Featured in TechCrunch and VentureBeat",
    "TECH": "Multi-agent systems, agentic AI development",
    "PARTNERSHIP": "Partnership with Microsoft on enterprise AI"
    }""",
    
    "Anthropic": """{
    "HIRING": "10 ML engineers, 4 sales roles, GTM expansion",
    "FUNDING": "Series C $5B (Jan 2026)",
    "PRODUCT": "Released Claude 3.5, 100K context window",
    "NEWS": "Multiple announcements this week",
    "TECH": "Constitutional AI, agent systems",
    "PARTNERSHIP": "Cloud provider partnership"
    }"""
    }
  
