from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, List, Optional
import random

router = APIRouter(prefix="/ae", tags=["AE"])

class MeetingAssistantRequest(BaseModel):
    audio_url: str

class MeddicCoachRequest(BaseModel):
    transcript_chunk: str

class SpeechDominanceRequest(BaseModel):
    audio_stream: str

class EngagementAnalysisRequest(BaseModel):
    meeting_id: str

class GenerateProposalRequest(BaseModel):
    deal_id: str

# 1. Assistente de Reunião Inteligente
@router.post("/meeting-assistant")
async def meeting_assistant(request: MeetingAssistantRequest):
    return {
        "tool": "meeting-assistant",
        "status": "processing",
        "transcript_id": f"trans_{random.randint(1000,9999)}",
        "estimated_completion": "2 minutes"
    }

# 2. MEDDIC Coach Real-time
@router.post("/meddic-coach")
async def meddic_coach(request: MeddicCoachRequest):
    # Simulated analysis of text
    feedback = []
    if "budget" not in request.transcript_chunk.lower():
        feedback.append("Ask about the budget approval process.")
    if "decision" not in request.transcript_chunk.lower():
        feedback.append("Identify the economic buyer.")

    if not feedback:
        feedback.append("Great job covering key points!")

    return {"tool": "meddic-coach", "feedback": feedback}

# 3. Detecção de Dominância de Fala
@router.post("/speech-dominance")
async def speech_dominance(request: SpeechDominanceRequest):
    rep_talk = random.uniform(0.3, 0.7)
    return {
        "tool": "speech-dominance",
        "rep_ratio": round(rep_talk, 2),
        "prospect_ratio": round(1 - rep_talk, 2),
        "alert": "You are talking too much!" if rep_talk > 0.6 else "Good balance."
    }

# 4. Análise de Engajamento
@router.post("/engagement-analysis")
async def engagement_analysis(request: EngagementAnalysisRequest):
    score = random.uniform(1, 10)
    return {
        "tool": "engagement-analysis",
        "engagement_score": round(score, 1),
        "sentiment": "Positive" if score > 7 else "Neutral"
    }

# 5. Gerador de Propostas Dinâmicas
@router.post("/generate-proposal")
async def generate_proposal(request: GenerateProposalRequest):
    return {
        "tool": "generate-proposal",
        "proposal_id": f"prop_{request.deal_id}",
        "status": "Draft Created",
        "sections_included": ["Executive Summary", "Pricing", "Terms"]
    }

# ... Placeholders for 6-20
@router.post("/auto-pricing")
async def auto_pricing(items: List[Dict]):
    return {"tool": "auto-pricing", "total": 10000}

@router.post("/discount-approval")
async def discount_approval(amount: float, discount: float):
    return {"tool": "discount-approval", "approved": True}

@router.get("/track-stakeholders")
async def track_stakeholders(deal_id: str):
    return {"tool": "track-stakeholders", "views": []}

@router.get("/churn-risk")
async def churn_risk(deal_id: str):
    return {"tool": "churn-risk", "risk_level": "Low"}

@router.get("/predict-close")
async def predict_close(deal_id: str):
    return {"tool": "predict-close", "probability": 0.8}

@router.get("/forecast-deal")
async def forecast_deal(deal_id: str):
    return {"tool": "forecast-deal", "expected_value": 8000}

@router.post("/generate-followup")
async def generate_followup(meeting_id: str):
    return {"tool": "generate-followup", "email_body": "Thanks for..."}

@router.post("/competitor-battle")
async def competitor_battle(competitor: str):
    return {"tool": "competitor-battle", "talking_points": []}

@router.post("/log-call")
async def log_call(call_data: Dict):
    return {"tool": "log-call", "id": "call_123"}

@router.post("/extract-next-steps")
async def extract_next_steps(transcript: str):
    return {"tool": "extract-next-steps", "steps": ["Send proposal"]}

@router.get("/stagnation-alert")
async def stagnation_alert():
    return {"tool": "stagnation-alert", "stagnant_deals": []}

@router.post("/simulate-deal")
async def simulate_deal(parameters: Dict):
    return {"tool": "simulate-deal", "outcome": "Won"}

@router.get("/win-loss-analysis")
async def win_loss_analysis(deal_id: str):
    return {"tool": "win-loss-analysis", "reason": "Price"}

@router.post("/clean-pipeline")
async def clean_pipeline():
    return {"tool": "clean-pipeline", "moved_deals": 5}

@router.get("/predictability-report")
async def predictability_report():
    return {"tool": "predictability-report", "accuracy": 0.9}
