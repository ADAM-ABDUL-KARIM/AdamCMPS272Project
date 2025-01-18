import { useState } from "react";
import api from "../api";

function WriteRecords() {
    const [username, setUsername] = useState("defaultUsername");
    const [password, setPassword] = useState("defaultPassword");
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [dateOfBirth, setDateOfBirth] = useState("2000-01-01");
    const [nationality, setNationality] = useState("Lebanese");
    const [address, setAddress] = useState("Default Address");
    const [maritalStatus, setMaritalStatus] = useState("Single");
    const [phoneNumber, setPhoneNumber] = useState("1234567890");
    const [gender, setGender] = useState("Male");
    const [height, setHeight] = useState("170");
    const [educationalLevel, setEducationalLevel] = useState("Bachelor's");
    const [employmentStatus, setEmploymentStatus] = useState("Employed");
    const [dominantHand, setDominantHand] = useState("Right");
    const [startDate, setStartDate] = useState("2023-01-01");
    const [activityLevel, setActivityLevel] = useState("Active");
    const [isRecovered, setIsRecovered] = useState(false);
    const [diagnosis, setDiagnosis] = useState(["Default Diagnosis"]);
    const [medication, setMedication] = useState(["Default Medication"]);

    const createPatient = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post("/api/patient/", {
                user: {
                    username: username,
                    password: password,
                },
                first_name: firstName,
                last_name: lastName,
                dob: dateOfBirth,
                nationality: nationality,
                address: address,
                marital_status: maritalStatus,
                phone_number: phoneNumber,
                gender: gender,
                height: parseFloat(height),
                educational_level: educationalLevel,
                employment_status: employmentStatus,
                dominant_hand: dominantHand,
                start_date: startDate,
                activity_level: activityLevel,
                is_recovered: isRecovered,
                diagnosis: diagnosis.map((d) => ({ diagnosis: d })),
                medication: medication.map((m) => ({ medication_name: m })),
            });
            if (response.status === 201) {
                alert("Record Created Successfully!");
                resetForm();
            } else {
                alert("Failed to create record. Please try again.");
            }
        } catch (error) {
            console.error("Error creating patient:", error.response.data);
            alert("An error occurred while creating the record.");
        }
    };

    const resetForm = () => {
        setUsername("defaultUsername");
        setPassword("defaultPassword");
        setFirstName("John");
        setLastName("Doe");
        setDateOfBirth("2000-01-01");
        setNationality("Lebanese");
        setAddress("Default Address");
        setMaritalStatus("Single");
        setPhoneNumber("1234567890");
        setGender("Male");
        setHeight("170");
        setEducationalLevel("Bachelor's");
        setEmploymentStatus("Employed");
        setDominantHand("Right");
        setStartDate("2023-01-01");
        setActivityLevel("Active");
        setIsRecovered(false);
        setDiagnosis(["Default Diagnosis"]);
        setMedication(["Default Medication"]);
    };

    const addDiagnosisField = () => setDiagnosis([...diagnosis, ""]);
    const removeDiagnosisField = (index) => setDiagnosis(diagnosis.filter((_, i) => i !== index));
    const handleDiagnosisChange = (index, value) => {
        const updated = diagnosis.map((d, i) => (i === index ? value : d));
        setDiagnosis(updated);
    };

    const addMedicationField = () => setMedication([...medication, ""]);
    const removeMedicationField = (index) => setMedication(medication.filter((_, i) => i !== index));
    const handleMedicationChange = (index, value) => {
        const updated = medication.map((m, i) => (i === index ? value : m));
        setMedication(updated);
    };

    return (
        <div className="write-records-container">
            <h2>Write a Record</h2>
            <form onSubmit={createPatient} className="write-records-form">
                {/* User Details */}
                <fieldset>
                    <legend>User Details</legend>

                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </fieldset>

                {/* Patient Details */}
                <fieldset>
                    <legend>Patient Details</legend>

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="dateOfBirth">Date of Birth:</label>
                    <input
                        type="date"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                    />

                    <label htmlFor="nationality">Nationality:</label>
                    <input
                        type="text"
                        id="nationality"
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        required
                    />

                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />

                    <label htmlFor="maritalStatus">Marital Status:</label>
                    <input
                        type="text"
                        id="maritalStatus"
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        required
                    />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />

                    <label htmlFor="gender">Gender:</label>
                    <input
                        type="text"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    />

                    <label htmlFor="height">Height (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        required
                        min="0"
                        step="0.1"
                    />

                    <label htmlFor="educationalLevel">Educational Level:</label>
                    <input
                        type="text"
                        id="educationalLevel"
                        value={educationalLevel}
                        onChange={(e) => setEducationalLevel(e.target.value)}
                        required
                    />

                    <label htmlFor="employmentStatus">Employment Status:</label>
                    <input
                        type="text"
                        id="employmentStatus"
                        value={employmentStatus}
                        onChange={(e) => setEmploymentStatus(e.target.value)}
                        required
                    />

                    <label htmlFor="dominantHand">Dominant Hand:</label>
                    <input
                        type="text"
                        id="dominantHand"
                        value={dominantHand}
                        onChange={(e) => setDominantHand(e.target.value)}
                        required
                    />

                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />

                    <label htmlFor="activityLevel">Activity Level:</label>
                    <input
                        type="text"
                        id="activityLevel"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                        required
                    />

                    <label htmlFor="isRecovered">Is Recovered:</label>
                    <input
                        type="checkbox"
                        id="isRecovered"
                        checked={isRecovered}
                        onChange={(e) => setIsRecovered(e.target.checked)}
                    />
                </fieldset>

                {/* Diagnosis Fields */}
                <fieldset>
                    <legend>Diagnosis</legend>
                    {diagnosis.map((d, index) => (
                        <div key={index} className="dynamic-field">
                            <input
                                type="text"
                                value={d}
                                onChange={(e) => handleDiagnosisChange(index, e.target.value)}
                                placeholder={`Diagnosis ${index + 1}`}
                                required
                            />
                            {diagnosis.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeDiagnosisField(index)}
                                    className="remove-button"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addDiagnosisField} className="add-button">
                        Add Diagnosis
                    </button>
                </fieldset>

                {/* Medication Fields */}
                <fieldset>
                    <legend>Medication</legend>
                    {medication.map((m, index) => (
                        <div key={index} className="dynamic-field">
                            <input
                                type="text"
                                value={m}
                                onChange={(e) => handleMedicationChange(index, e.target.value)}
                                placeholder={`Medication ${index + 1}`}
                                required
                            />
                            {medication.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => removeMedicationField(index)}
                                    className="remove-button"
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    ))}
                    <button type="button" onClick={addMedicationField} className="add-button">
                        Add Medication
                    </button>
                </fieldset>

                {/* Submit Button */}
                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default WriteRecords;