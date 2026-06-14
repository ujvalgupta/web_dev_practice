"""
tracker.py - Intent Signal Tracker (Phase 1 - Pure Python)
"""

from config import INTENT_SIGNALS, ICP_COMPANIES, RESEARCH_DATA
from datetime import datetime
import ast

# =============================================================
# This function gives you the raw research data of a company
# =============================================================

def research_company(company_name):
    return RESEARCH_DATA[company_name]

# =============================================================
# Finds which signals are present in the research data
# =============================================================

def match_signals(research_data):
    researched_data = ast.literal_eval(research_data)
    matched_stuff = []
    for signal in INTENT_SIGNALS:
        if signal["category"].upper() in researched_data:
            data = researched_data[signal["category"].upper()]
            for keyword in signal["keywords"]:
                if keyword in data:
                    matched_signal = {
                            "signal_id"   : signal["signal_id"],
                            "signal_name" : signal["name"],
                            "weight"      : signal["weight"]
                    }
                    matched_stuff.append(matched_signal)
    
    return matched_stuff

# =============================================================
# Convert matched signals into a 0-100 score
# =============================================================

def calculate_score(matched_signals):
    total_weights_sum = 0
    matched_weights_sum = 0

    for signal in INTENT_SIGNALS:
        total_weights_sum += signal["weight"]
    
    for signal in matched_signals:
        matched_weights_sum += signal["weight"]

    score = max(100 , (matched_weights_sum*100)/total_weights_sum);

    return score

# =============================================================
# Run the complete workflow for one company
# =============================================================

def track_single_company(company_name):
    intent_score = calculate_score(match_signals(research_company(company_name)))
    is_hot = False
    if (intent_score > 1) :
        is_hot = True

    result = {
        "company_name"    : company_name,
        "is_hot"          : is_hot,
        "date"            : datetime.now().strftime("%c")
        }

    return result

# =============================================================
# Run the complete workflow for all companies
# =============================================================

def run_tracking():
    results = []
    for company in ICP_COMPANIES:
        results.append(track_single_company(company["name"]))
    
    print("Hello")
    print(results)

# =============================================================
# Main entry point
# =============================================================

def main():
    run_tracking()

if __name__ == "__main__":
    main()
