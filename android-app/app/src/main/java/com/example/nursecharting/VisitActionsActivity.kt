package com.example.nursecharting

import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.widget.Button
import android.widget.CheckBox
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class VisitActionsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_visit_actions)

        val patient = Store.getSelectedPatient() ?: return finish()
        findViewById<TextView>(R.id.tvHeaderTitle).text = "${patient.location} - ${patient.name}"
        findViewById<Button>(R.id.btnBack).setOnClickListener { finish() }

        val container = findViewById<LinearLayout>(R.id.actionsContainer)

        Store.visitActions.forEach { (action, isChecked) ->
            val itemView = LinearLayout(this).apply {
                orientation = LinearLayout.HORIZONTAL
                setPadding(32, 32, 32, 32)
                isClickable = true
                setOnClickListener {
                    handleActionClick(action)
                }
            }

            val checkBox = CheckBox(this).apply {
                this.isChecked = isChecked
                buttonTintList = android.content.res.ColorStateList.valueOf(Color.parseColor("#76FF03"))
                setOnClickListener { 
                    Store.visitActions[action] = this.isChecked
                }
            }

            val textView = TextView(this).apply {
                text = action
                setTextColor(Color.WHITE)
                textSize = 16f
                setPadding(16, 0, 0, 0)
            }

            if (listOf("Mileage/Drive Time", "Demographics", "Vital Signs & Measures", "Physical Assessment", "Interventions/Goals").contains(action)) {
                textView.text = "$action *"
                // Ideally style the asterisk red, but simple text append is fine for now
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

    private fun handleActionClick(action: String) {
        when (action) {
            "Mileage/Drive Time" -> startActivity(Intent(this, MileageActivity::class.java))
            "Demographics" -> startActivity(Intent(this, DemographicsActivity::class.java))
            "Physical Assessment" -> startActivity(Intent(this, PhysicalAssessmentActivity::class.java))
            "New Order" -> startActivity(Intent(this, NewOrderActivity::class.java))
        }
    }
}
