Markdown
# Autonomous AI Test Agent (Playwright + Gemini Matrix)

An advanced, autonomous Quality Assurance (QA) Test Agent built with TypeScript, Playwright, and the official Google Gen AI SDK. The agent is designed to dynamically evaluate web interfaces, break down high-level end-to-end user goals into granular browser interactions, and autonomously complete complex transaction flows.

## 🎯 Project Objectives & Test Scope
The agent focuses on verifying a critical multi-step checkout funnel at Swag Labs (`saucedemo.com`). It handles the following pipeline dynamically:
1. **Target Initialization:** Launching a Chromium instance and handling standard authentication matrix protocols.
2. **Product Catalog Parsing:** Identifying specific items (e.g., "Sauce Labs Backpack") and committing mutating cart actions.
3. **Checkout Funnel Progression:** Navigating the shopping cart and securely satisfying multi-field customer data grids (First Name: Ayush, Last Name: Rajput, Zip/Postal Code: 201016).
4. **Data Verification Loop:** Evaluating the final order checkout total to guarantee mathematical compliance with the strict criteria grid ($32.39).

---

## 🛠️ Tech Stack & Dependencies
* **Runtime:** Node.js (v18+)
* **Language Compiler:** TypeScript (`ts-node`)
* **Automation Engine:** Playwright (Chromium)
* **Intelligence Layer:** Official `@google/genai` (Gemini SDK Matrix)
* **Configuration Management:** `dotenv`

---

## 🚀 Installation & System Setup

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/Manu2909/ai-test-agent.git](https://github.com/Manu2909/ai-test-agent.git)
   cd ai-test-agent
Install Dependencies:
Ensure all critical automation packages and ambient types are compiled correctly:

Bash
npm install
Configure Environment Variables:
Create a .env file in the root directory of the workspace and include your authorized API engine credentials:

Code snippet
GEMINI_API_KEY=your_actual_api_key_here
🧠 Architectural Workflow & Design
The engine is structured as an Autonomous Reasoning Executive Loop. Instead of relying on hardcoded element scripts, the agent uses a look-ahead sequence loop:

[DOM Context Extraction] ---> [Gemini Cognitive Mapping] ---> [JSON Plan Generation]
         ^                                                                |
         |____________________  [Playwright Browser Execution]  <__________/
Key Engineering Features:
Hybrid Authentication Guard: Pre-authenticates layout portals dynamically before handing over loop states to optimize processing token metrics.

Payload Truncation Strategy: Automatically sanitizes and trims raw page context down to target layout nodes to respect Google free-tier token velocity thresholds.

Quota Rate-Throttling: Integrated explicit cooling periods between step iterations to completely safeguard against 429 (Resource Exhausted) request limit traps.

📦 Running the Test Agent
Execute the main compiler runner to launch the visual browser session and track execution tracing logs directly inside your terminal panel:

Bash
npm start
📊 Sample Terminal Execution Logs
Plaintext
🚀 Starting TestSwiftly Compliance Agent (Reasoning Loop Active)...
🏁 Generation: Navigate to [https://saucedemo.com](https://saucedemo.com)
🔒 Pre-authenticating target user portal framework...

🤖 --- Loop Iteration #1 ---
🧠 Thinking (LLM Call) => Previous Steps + current page screenshots...
💡 Agent Thought: "I am on the inventory page. To complete the high level goal, I must locate the 'Sauce Labs Backpack' and add it to the cart."
🎯 Calculated Action: CLICK target selector -> "[data-test="add-to-cart-sauce-labs-backpack"]"
⏳ Processing structural DOM mutation frames...

🤖 --- Loop Iteration #2 ---
...
🔍 Checking if high level goal is complete or not...
📝 Verified on screen text content: Total matches $32.39!
🎯 RESULT: High level goal is complete. Stopping agent.
=======================================================
🏆 Test Suite successfully generated and validated on video proof!

---

### 3. Git Terminal Push Commands
```powershell
git add agent.ts README.md
git commit -m "docs: finalized runtime loop execution and documentation requirements"
git push origin main