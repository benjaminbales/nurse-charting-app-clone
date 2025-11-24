package com.example.nursecharting

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import android.widget.ArrayAdapter

class MileageActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_mileage)

        val patient = Store.getSelectedPatient() ?: return finish()
        findViewById<TextView>(R.id.tvHeaderTitle).text = "${patient.location} - ${patient.name}"
        findViewById<Button>(R.id.btnBack).setOnClickListener { finish() }

        val spinner = findViewById<Spinner>(R.id.spinner)
        // Simple adapter for spinner
        // In a real app, use a proper adapter
        // For now, just placeholder

        val etStart = findViewById<EditText>(R.id.etStart)
        val etEnd = findViewById<EditText>(R.id.etEnd)
        val tvTotal = findViewById<TextView>(R.id.tvTotal)
        val etDriveTime = findViewById<EditText>(R.id.etDriveTime)

        etStart.setText(Store.mileage.start)
        etEnd.setText(Store.mileage.end)
        tvTotal.text = Store.mileage.total
        etDriveTime.setText(Store.mileage.driveTime)

        findViewById<Button>(R.id.btnSave).setOnClickListener {
            Store.mileage.start = etStart.text.toString()
            Store.mileage.end = etEnd.text.toString()
            Store.mileage.driveTime = etDriveTime.text.toString()
            // Calculate total logic could go here
            finish()
        }

        findViewById<Button>(R.id.btnCancel).setOnClickListener {
            finish()
        }
    }
}
