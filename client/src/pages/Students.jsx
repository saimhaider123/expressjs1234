    import { useEffect, useState } from "react";
    import api from "../api/api";
    import Swal from "sweetalert2";
    import "./students.css";

    export default function Students() {
        const [students, setStudents] = useState([]);
        const [form, setForm] = useState({
            name: "",
            age: "",
            className: "",
            rollNo: ""
        });
        const [editId, setEditId] = useState(null);

        // ✅ FETCH
        const fetchStudents = async () => {
            const res = await api.get("/students");
            setStudents(res.data.list);
        };

        // ✅ INPUT
        const handleChange = (e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
        };

        // ✅ ADD / UPDATE
        const addStudent = async (e) => {
            e.preventDefault();
            if (!form.name || !form.age || !form.className || !form.rollNo) return;

            if (editId) {
                await api.put(`/students/update/${editId}`, form);
                Swal.fire("Updated!", "Student updated successfully", "success");
            } else {
                await api.post("/students/add", form);
                Swal.fire("Added!", "Student added successfully", "success");
            }

            setForm({ name: "", age: "", className: "", rollNo: "" });
            setEditId(null);
            fetchStudents();
        };

        // ✅ EDIT
        const editStudent = (student) => {
            setForm({
                name: student.name,
                age: student.age,
                className: student.className,
                rollNo: student.rollNo
            });
            setEditId(student._id);
        };

        // ✅ DELETE with confirm
        const deleteStudent = async (id) => {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "This student will be deleted!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#dc2626",
                cancelButtonColor: "#6b7280",
                confirmButtonText: "Yes, delete it!"
            });

            if (result.isConfirmed) {
                await api.delete(`/students/delete/${id}`);
                Swal.fire("Deleted!", "Student deleted successfully", "success");
                fetchStudents();
            }
        };

        useEffect(() => {
            fetchStudents();
        }, []);

        return (
            <div className="container">
                <h2>Student Management</h2>

                <form className="form" onSubmit={addStudent}>
                    <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} />
                    <input name="age" type="number" placeholder="Age" value={form.age} onChange={handleChange} />
                    <input name="className" placeholder="Class" value={form.className} onChange={handleChange} />
                    <input name="rollNo" type="number" placeholder="Roll No" value={form.rollNo} onChange={handleChange} />

                    <button type="submit">
                        {editId ? "Update Student" : "Add Student"}
                    </button>
                </form>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Class</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s) => (
                            <tr key={s._id}>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.className}</td>
                                <td>{s.rollNo}</td>
                                <td>
                                    <button onClick={() => editStudent(s)}>Edit</button>
                                    <button className="delete" onClick={() => deleteStudent(s._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
