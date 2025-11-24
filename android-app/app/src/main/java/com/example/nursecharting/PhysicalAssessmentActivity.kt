package com.example.nursecharting

import android.graphics.Color
import android.os.Bundle
import android.widget.Button
import android.widget.CheckBox
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class PhysicalAssessmentActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_physical_assessment)

        val patient = Store.getSelectedPatient() ?: return finish()
        findViewById<TextView>(R.id.tvHeaderTitle).text = "${patient.location} - ${patient.name}"
        findViewById<Button>(R.id.btnBack).setOnClickListener { finish() }

        val container = findViewById<LinearLayout>(R.id.systemsContainer)
        val systems = listOf(
            "PATIENT IDENTIFIER", "HEAD/NECK", "EYES/EARS/NOSE/THROAT", "PAIN",
            "INTEGUMENTARY - [ICC]", "CARDIOVASCULAR", "RESPIRATORY", "GENITOURINARY",
            "GASTROINTESTINAL", "NUTRITIONAL", "NEUROLOGIC", "ENDOCRINE/HEMATOPOIETIC",
            "MEDICATIONS", "FUNCTIONAL", "DISCHARGE PLANNING", "CARE COORDINATION", "HOMEBOUND STATUS"
        )

        systems.forEach { system ->
            val itemView = LinearLayout(this).apply {
                orientation = LinearLayout.HORIZONTAL
                setPadding(32, 32, 32, 32)
            }

            val checkBox = CheckBox(this).apply {
                buttonTintList = android.content.res.ColorStateList.valueOf(Color.WHITE)
            }

            val textView = TextView(this).apply {
                text = system
                setTextColor(Color.WHITE)
                textSize = 16f
                setPadding(16, 0, 0, 0)
            }

            if (system.contains("[ICC]")) {
                // Simple highlighting logic if needed, for now just text
                textView.setTextColor(Color.WHITE) 
            }

            itemView.addView(checkBox)
            itemView.addView(textView)
            container.addView(itemView)

            // Divider
            val divider = android.view.View(this).apply {
                layoutParams = LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, 1)
                setBackgroundColor(Color.parseColor("#555555"))
            }
            container.addView(divider)
        }
    }
}
