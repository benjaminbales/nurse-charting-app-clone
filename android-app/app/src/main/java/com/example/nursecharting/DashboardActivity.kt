package com.example.nursecharting

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.LinearLayout
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class DashboardActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dashboard)

        val patient = Store.getSelectedPatient() ?: return finish()

        findViewById<TextView>(R.id.tvPatientNameMrn).text = "${patient.name} - ${patient.mrn}"
        findViewById<TextView>(R.id.tvPatientLocation).text = patient.location
        findViewById<TextView>(R.id.tvPatientPhone).text = patient.phone
        findViewById<TextView>(R.id.tvVisitDate).text = patient.visitDate
        findViewById<TextView>(R.id.tvVisitNumber).text = "Visit ${patient.visitNumber} !"

        findViewById<LinearLayout>(R.id.btnVisitActions).setOnClickListener {
            startActivity(Intent(this, VisitActionsActivity::class.java))
        }

        findViewById<Button>(R.id.btnSignOut).setOnClickListener {
            finish()
        }
    }
}
