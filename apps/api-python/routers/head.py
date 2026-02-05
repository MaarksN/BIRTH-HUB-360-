from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, List, Optional
import random

router = APIRouter(prefix="/head", tags=["Head of Sales"])

class DataCoachingRequest(BaseModel):
    user_id: str

class QuotaSimulatorRequest(BaseModel):
    scenarios: Dict

class OneOnOneFeedbackRequest(BaseModel):
    user_id: str
    notes: str

# 1. Detector de Burnout
@router.get("/burnout-detector")
async def burnout_detector(team_id: str):
    risk = random.choice(["Low", "Medium", "High"])
    return {
        "tool": "burnout-detector",
        "risk": risk,
        "overworked_reps": ["John Doe"] if risk == "High" else []
    }

# 2. Análise de Carga de Trabalho
@router.get("/workload-analysis")
async def workload_analysis(user_id: str):
    return {
        "tool": "workload-analysis",
        "active_deals": random.randint(5, 30),
        "meetings_per_week": random.randint(10, 40),
        "status": "Balanced"
    }

# 3. Zombie Deals Detector
@router.get("/zombie-deals")
async def zombie_deals():
    return {
        "tool": "zombie-deals",
        "count": random.randint(0, 10),
        "potential_revenue_locked": 50000
    }

# 4. Auditoria de Pipeline
@router.get("/pipeline-audit")
async def pipeline_audit():
    return {
        "tool": "pipeline-audit",
        "coverage_ratio": 3.5,
        "stalled_deals_percentage": 0.15
    }

# 5. Coaching Baseado em Dados
@router.post("/data-coaching")
async def data_coaching(request: DataCoachingRequest):
    return {
        "tool": "data-coaching",
        "focus_areas": ["Negotiation", "Discovery"],
        "recommended_calls_to_review": ["call_123", "call_456"]
    }

# ... Placeholders 6-20
@router.get("/skill-gaps")
async def skill_gaps(user_id: str):
    return {"tool": "skill-gaps", "gaps": ["Negotiation"]}

@router.get("/training-recommendation")
async def training_recommendation(user_id: str):
    return {"tool": "training-recommendation", "courses": []}

@router.get("/rep-performance")
async def rep_performance(user_id: str):
    return {"tool": "rep-performance", "metrics": {}}

@router.post("/quota-simulator")
async def quota_simulator(request: QuotaSimulatorRequest):
    return {"tool": "quota-simulator", "feasible": True}

@router.get("/motivation-manager")
async def motivation_manager(user_id: str):
    return {"tool": "motivation-manager", "mood": "High"}

@router.get("/performance-drop-alert")
async def performance_drop_alert():
    return {"tool": "performance-drop-alert", "alerts": []}

@router.get("/tactical-report")
async def tactical_report():
    return {"tool": "tactical-report", "actions": []}

@router.get("/rep-comparison")
async def rep_comparison():
    return {"tool": "rep-comparison", "matrix": {}}

@router.get("/capacity-planning")
async def capacity_planning():
    return {"tool": "capacity-planning", "needed_headcount": 2}

@router.get("/cadence-management")
async def cadence_management():
    return {"tool": "cadence-management", "compliance": 0.9}

@router.get("/team-health")
async def team_health():
    return {"tool": "team-health", "score": 88}

@router.post("/one-on-one-feedback")
async def one_on_one_feedback(request: OneOnOneFeedbackRequest):
    return {"tool": "one-on-one-feedback", "stored": True}

@router.get("/evolution-history")
async def evolution_history(user_id: str):
    return {"tool": "evolution-history", "trend": "Up"}

@router.get("/predictability-indicators")
async def predictability_indicators():
    return {"tool": "predictability-indicators", "score": 0.85}

@router.get("/leadership-dashboard")
async def leadership_dashboard():
    return {"tool": "leadership-dashboard", "summary": {}}
