package com.example.nursecharting

import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.view.Gravity
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val container = findViewById<LinearLayout>(R.id.container)
        val days = listOf("Today (0)", "Fri (0)", "Sat (0)", "Sun (0)", "Mon (0)", "Tue (0)", "Wed (0)")

        // Render Days
        days.forEachIndexed { index, day ->
            val itemView = LinearLayout(this).apply {
                orientation = LinearLayout.HORIZONTAL
                setPadding(32, 32, 32, 32)
                setBackgroundColor(if (index == 0) Color.parseColor("#4CAF50") else Color.parseColor("#424242"))
            }

            val tvDay = TextView(this).apply {
                text = day
                setTextColor(Color.WHITE)
                textSize = 16f
                layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
            }
            
            val tvDate = TextView(this).apply {
                text = if (index == 0) "2/27" else ""
                setTextColor(Color.WHITE)
            }

            itemView.addView(tvDay)
            itemView.addView(tvDate)
            container.addView(itemView)
            
            // Divider
            val divider = android.view.View(this).apply {
                layoutParams = LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, 1)
                setBackgroundColor(Color.parseColor("#555555"))
            }
            container.addView(divider)
        }

        // Overdue Header
        val overdueHeader = LinearLayout(this).apply {
            setPadding(32, 32, 32, 32)
            setBackgroundColor(Color.parseColor("#D32F2F"))
        }
        val tvOverdue = TextView(this).apply {
            text = "Overdue Visits (2)"
            setTextColor(Color.WHITE)
            textSize = 16f
            setTypeface(null, android.graphics.Typeface.BOLD)
        }
        overdueHeader.addView(tvOverdue)
        container.addView(overdueHeader)

        // Render Patients
        Store.patients.filter { it.isOverdue }.forEach { patient ->
            val patientView = LinearLayout(this).apply {
                orientation = LinearLayout.HORIZONTAL
                setPadding(32, 32, 32, 32)
                setBackgroundColor(Color.parseColor("#424242"))
                isClickable = true
                setOnClickListener {
                    Store.selectedPatientId = patient.id
                    startActivity(Intent(this@MainActivity, DashboardActivity::class.java))
                }
            }

            // Warning Icon Placeholder
            val icon = TextView(this).apply {
                text = "!"
                setTextColor(Color.parseColor("#FF9800"))
                setBackgroundColor(Color.parseColor("#5D4037"))
                gravity = Gravity.CENTER
                setPadding(16, 8, 16, 8)
            }
            
            val infoLayout = LinearLayout(this).apply {
                orientation = LinearLayout.VERTICAL
                layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
                setPadding(32, 0, 0, 0)
            }
            
            val tvLocation = TextView(this).apply {
                text = "${patient.location} !"
                setTextColor(Color.WHITE)
                setTypeface(null, android.graphics.Typeface.BOLD)
            }
            val tvName = TextView(this).apply {
                text = patient.name
                setTextColor(Color.WHITE)
            }
            val tvMrn = TextView(this).apply {
                text = patient.mrn
                setTextColor(Color.parseColor("#BDBDBD"))
                textSize = 12f
            }
            
            infoLayout.addView(tvLocation)
            infoLayout.addView(tvName)
            infoLayout.addView(tvMrn)

            val tvDate = TextView(this).apply {
                text = patient.visitDate
                setTextColor(Color.WHITE)
            }

            patientView.addView(icon)
            patientView.addView(infoLayout)
            patientView.addView(tvDate)
            
            container.addView(patientView)

            // Divider
            val divider = android.view.View(this).apply {
                layoutParams = LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, 1)
                setBackgroundColor(Color.parseColor("#555555"))
            }
            container.addView(divider)
        }
    }
}

