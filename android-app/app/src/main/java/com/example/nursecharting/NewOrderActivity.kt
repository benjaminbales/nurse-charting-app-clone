package com.example.nursecharting

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class NewOrderActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_new_order)

        val patient = Store.getSelectedPatient()

        val tvHeaderTitle = findViewById<TextView>(R.id.tvHeaderTitle)
        tvHeaderTitle.text = patient?.name ?: "Unknown Patient"

        findViewById<Button>(R.id.btnBack).setOnClickListener {
            finish()
        }

        findViewById<Button>(R.id.btnSave).setOnClickListener {
            Toast.makeText(this, "Order Saved", Toast.LENGTH_SHORT).show()
            finish()
        }

        findViewById<Button>(R.id.btnDiscard).setOnClickListener {
            finish()
        }
    }
}
