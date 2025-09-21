# Overflow - Multi-Agent AI System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Overview

**Overflow** is a **JavaScript-based multi-agent AI system** designed to automatically **collect, interpret, clarify, validate, and refine user requirements**. Each agent in the system performs a specialized task, ensuring that user input is transformed into **clear, actionable, and professional requirements**.

This project demonstrates **multi-agent collaboration** and can be extended for various AI-driven applications.

---

## Key Features

- **Domain Detection:** Identifies the domain of the requirement, e.g., Finance, Healthcare, E-commerce, etc.  
- **Clarification:** Detects ambiguous words or phrases that make the requirement unclear.  
- **Validation:** Checks if the input is complete and detailed enough for implementation.  
- **Refinement:** Uses AI-powered logic to rewrite the requirement clearly and professionally.  
- **Multi-Agent Architecture:** Each agent passes its output to the next, forming a sequential workflow.

---

## File Structure
Overflow/
├── MultiAgentAI.js # Main JavaScript file implementing the multi-agent AI system
└── README.md # Project documentation


---

## Setup Instructions

### 1. Clone the Repository
bash
git clone https://github.com/BhavanaBura/Overflow.git
cd Overflow

2. Install Node.js

Download and install Node.js from https://nodejs.org/
. Verify installation:

node -v
npm -v

3. Install Dependencies (if any)
npm install

4. Run the Multi-Agent AI System
node MultiAgentAI.js

Example Usage

User Input:

I think the system should maybe process payments quickly.

Pipeline Output:

Domain: Finance

Ambiguities: maybe, quickly

Validation: Incomplete (short input)

Refined Requirement:

The system shall automatically process all payments efficiently and reliably, ensuring accurate records and notifications for finance managers.

