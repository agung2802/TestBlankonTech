
const data = {
            name: "John Doe",
            email: "johndoe@example.com",
            token: "ad7e2be16ac239213c326456c1593cb44d28cb45",
            data: [
                {
                    id: 1,
                    job_title: "Software Engineer",
                    position: "Senior Developer",
                    salary: "$100,000",
                    location: "San Francisco",
                    created_at: "2023-12-27T01:40:54.810782Z",
                    updated_at: "2023-12-27T01:40:54.810841Z"
                },
                {
                    id: 2,
                    job_title: "Data Scientist",
                    position: "Data Analyst",
                    salary: "$90,000",
                    location: "New York City",
                    created_at: "2023-12-27T01:40:54.812397Z",
                    updated_at: "2023-12-27T01:40:54.812474Z"
                },
                {
                    id: 3,
                    job_title: "UX Designer",
                    position: "UI/UX Specialist",
                    salary: "$80,000",
                    location: "Seattle",
                    created_at: "2023-12-27T01:40:54.813592Z",
                    updated_at: "2023-12-27T01:40:54.813637Z"
                },
                {
                    id: 4,
                    job_title: "Product Manager",
                    position: "Product Owner",
                    salary: "$110,000",
                    location: "Austin",
                    created_at: "2023-12-27T01:40:54.814541Z",
                    updated_at: "2023-12-27T01:40:54.814569Z"
                },
                {
                    id: 5,
                    job_title: "Frontend Developer",
                    position: "Web Developer",
                    salary: "$85,000",
                    location: "Chicago",
                    created_at: "2023-12-27T01:40:54.816410Z",
                    updated_at: "2023-12-27T01:40:54.816451Z"
                },
                {
                    id: 6,
                    job_title: "Network Administrator",
                    position: "IT Specialist",
                    salary: "$75,000",
                    location: "Denver",
                    created_at: "2023-12-27T01:40:54.817805Z",
                    updated_at: "2023-12-27T01:40:54.817848Z"
                },
                {
                    id: 7,
                    job_title: "Marketing Manager",
                    position: "Digital Marketing Lead",
                    salary: "$95,000",
                    location: "Los Angeles",
                    created_at: "2023-12-27T01:40:54.819144Z",
                    updated_at: "2023-12-27T01:40:54.819186Z"
                },
                {
                    id: 8,
                    job_title: "Database Administrator",
                    position: "DBA",
                    salary: "$85,000",
                    location: "Boston",
                    created_at: "2023-12-27T01:40:54.820060Z",
                    updated_at: "2023-12-27T01:40:54.820088Z"
                },
                {
                    id: 9,
                    job_title: "Cybersecurity Analyst",
                    position: "Security Engineer",
                    salary: "$90,000",
                    location: "Washington, D.C.",
                    created_at: "2023-12-27T01:40:54.820971Z",
                    updated_at: "2023-12-27T01:40:54.820997Z"
                },
                {
                    id: 10,
                    job_title: "Mobile App Developer",
                    position: "iOS/Android Developer",
                    salary: "$95,000",
                    location: "San Diego",
                    created_at: "2023-12-27T01:40:54.821841Z",
                    updated_at: "2023-12-27T01:40:54.821867Z"
                }
            ]
        };
        
export const Dashboard = () => {

    return(
        <div className="flex justify-around p-20">
                <div className="pe-8">
                    <div>
                        <p className="text-2xl font-bold">Hi, {data.name}</p>
                        <p>Don't miss out on the opportunity to advance your career, browse our job listings now!</p>
                    </div>
                    <div className="pt-8">
                        <input type="search" placeholder="Search job" className="h-8 rounded-md border-2 w-full"/>
                    </div>

                    <div className="pt-8">
                            {data.data.map((response) => {
                                return (
                                    <div className="border-2 p-4 rounded-md">
                                        <p>{response.job_title}</p>
                                        <p>{response.position}</p>
                                        <p className="text-green-500">{response.salary}</p>
                                        <div className="flex justify-between">
                                            <p>{response.location}</p>
                                            <p>{response.updated_at}</p>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>

            <div className="border-2 border-black w-3/4 h-screen flex flex-col justify-center">
                <p className="w-full text-2xl text-center">There Are 10 Vacancies for you</p>
                <p className="w-full text-center">Select a job to see more details</p>
            </div>
        </div>
    );
}