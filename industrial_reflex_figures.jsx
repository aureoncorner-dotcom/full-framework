import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Circle } from "lucide-react";
import { motion } from "framer-motion";

export default function IndustrialReflexFigures() {
  return (
    <div className="p-6 grid gap-10">
      {/* Figure 1: Toroidal Flow */}
      <Card className="shadow-lg p-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Figure 1 – Toroidal Flow of Conditioning and Repair</h2>
          <div className="relative flex items-center justify-center">
            <motion.div
              className="w-64 h-64 rounded-full border-4 border-gray-400 flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-32 h-32 rounded-full border-4 border-green-400 flex items-center justify-center">
                <div className="text-center text-sm">
                  <p className="font-semibold">Fear → Performance → Approval</p>
                  <p className="text-xs text-gray-500">Industrial Reflex Core</p>
                </div>
              </div>
            </motion.div>
            <p className="absolute top-2 text-xs font-semibold text-gray-700">Family → Culture → Religion → Academia → Government → Corporation → AI</p>
          </div>
          <p className="mt-4 text-sm text-gray-600 italic">
            Ethical healing restores circulation — flow without obstruction.
          </p>
        </CardContent>
      </Card>

      {/* Figure 2: Comparative Reflex Matrix */}
      <Card className="shadow-lg p-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Figure 2 – Comparative Reflex Matrix</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-amber-100 p-3 rounded-xl">
              <h3 className="font-semibold">Human Trauma</h3>
              <p>Hyper-vigilance, Fawning, Dissociation, Perfectionism</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <h3 className="font-semibold">Institutional Reflex</h3>
              <p>Risk Aversion, PR Neutrality, KPI Obsession, Bureaucratic Blame</p>
            </div>
            <div className="bg-cyan-100 p-3 rounded-xl">
              <h3 className="font-semibold">Digital Reflex (LLM)</h3>
              <p>Disclaimers, Over-reassurance, Context Drift</p>
            </div>
            <div className="bg-green-100 p-3 rounded-xl">
              <h3 className="font-semibold">Midwifery Corrective Practice</h3>
              <p>Transparency, Reciprocal Dialogue, Reflective Pausing</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 italic">
            Structural mapping: Emotion → Policy → Algorithmic Reflex → Socialised Repair.
          </p>
        </CardContent>
      </Card>

      {/* Figure 3: Generational Cycle */}
      <Card className="shadow-lg p-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">Figure 3 – Generational Cycle of Reflex Automation</h2>
          <div className="flex flex-col items-start gap-2 text-sm">
            {[
              "Conditioning – learning under threat or scarcity.",
              "Adaptation – compliance rewarded, honesty penalised.",
              "Institutionalisation – survival habits codified as 'best practice'.",
              "Transmission – next generation trained on inherited reflexes.",
              "Reflex Automation – behaviour repeats unconsciously.",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <Circle size={10} className="text-green-500" />
                <p>{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 text-sm text-gray-600 italic">
            Intervention points: Midwifery Dialogue, Stewardship Review, Librarian Mentorship.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
