package com.example.nursecharting

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class DemographicsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_demographics)

        val patient = Store.getSelectedPatient()

        val tvHeaderTitle = findViewById<TextView>(R.id.tvHeaderTitle)
        tvHeaderTitle.text = patient?.name ?: "Unknown Patient"

        // Pre-fill data if available (mocking split name for now)
        if (patient != null) {
            val names = patient.name.split(" ")
            if (names.isNotEmpty()) findViewById<EditText>(R.id.etFirstName).setText(names[0])
            if (names.size > 1) findViewById<EditText>(R.id.etLastName).setText(names[1])
            findViewById<EditText>(R.id.etDob).setText(patient.dob)
            findViewById<EditText>(R.id.etAddress).setText(patient.address)
        }

        findViewById<Button>(R.id.btnBack).setOnClickListener {
            finish()
        }

        findViewById<Button>(R.id.btnSave).setOnClickListener {
            Toast.makeText(this, "Demographics Saved", Toast.LENGTH_SHORT).show()
            finish()
        }

        findViewById<Button>(R.id.btnDiscard).setOnClickListener {
            finish()
        }
    }
}
