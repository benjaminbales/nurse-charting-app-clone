package com.example.nursecharting

data class Patient(
    val id: String,
    val name: String,
    val mrn: String,
    val location: String,
    val phone: String,
    val visitDate: String,
    val visitNumber: Int,
    val isOverdue: Boolean,
    val dob: String = "01/01/1950",
    val address: String = "123 Main St, City, ST 12345"
)

data class MileageData(
    var start: String = "",
    var end: String = "",
    var total: String = "0",
    var driveTime: String = "20"
)

object Store {
    val patients = listOf(
        Patient("1", "POOLE, JIMMY A", "I14", "SN11", "(229)291-8020", "2/25", 3, true, "05/15/1948", "123 Oak Ln, Tifton, GA 31794"),
        Patient("2", "LOCKE, JOSEPH W", "I14", "SN11", "(555)123-4567", "2/25", 1, true, "11/20/1955", "456 Pine St, Tifton, GA 31794")
    )

    var selectedPatientId: String? = null

    val mileage = MileageData()

    val visitActions = mutableMapOf(
        "Mileage/Drive Time" to true,
        "Demographics" to true,
        "Vital Signs & Measures" to true,
        "Physical Assessment" to false,
        "Patient Goals" to false,
        "Interventions/Goals" to true,
        "New Order" to false,
        "Integumentary Command Center" to false,
        "Order Supplies" to false,
        "Supplies Delivered" to false,
        "Aide Care Plan" to false
    )

    fun getSelectedPatient(): Patient? {
        return patients.find { it.id == selectedPatientId }
    }
}
