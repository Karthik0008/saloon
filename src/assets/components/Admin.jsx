// src/components/Admin.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
    const [appointments, setAppointments] = useState([]);
    const [message, setMessage] = useState('');

    const fetchAppointments = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/appointments'); // Replace with your Spring Boot backend URL
            setAppointments(response.data);
            setMessage('');
        } catch (error) {
            setMessage('Failed to fetch appointments.');
            console.error('Error fetching appointments:', error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/appointments/${id}`); // Replace with your Spring Boot backend URL
            setMessage('Appointment deleted successfully!');
            fetchAppointments(); // Re-fetch appointments after deletion
        } catch (error) {
            setMessage('Failed to delete appointment.');
            console.error('Error deleting appointment:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-20">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Panel - All Appointments</h2>
                {message && (
                    <p className={`mb-4 text-center ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )}
                {appointments.length === 0 ? (
                    <p className="text-center text-gray-600">No appointments found.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {appointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.userName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.mobileNumber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.emailId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {appointment.purpose === 'skin_care' ? 'Skin Care' :
                                             appointment.purpose === 'hair_treatment' ? 'Hair Treatment' :
                                             appointment.purpose === 'hair_style_suggestion' ? 'Hair Style Suggestion' :
                                             appointment.purpose}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button
                                                onClick={() => handleDelete(appointment.id)}
                                                className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;