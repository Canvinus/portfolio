const myProjects = [
    {
        title: 'Multi-user chat',
        description: "Chat subsystem that can be integration into the different jitsi-meet project. The subsystem is using contacts and video-calls from the main system. The main functionality is to create private or group chats with moderation and chat in real-time. Also, this subsystem is creating the new chat for each new video meeting in the main system.",
        photo: '',
        link: 'https://muchat.infostrategic.com/swagger/index.html',
        stack: 'ASP.NET Core, SignalR, Entity Framework (DB First), Oracle DB, swagger, JWT Auth',
    },
    {
        title: 'Student attendance monitoring service based on ML',
        description: "Monitoring service created to validate if the real person is presented on the online meeting. The main functionality of the app is to schedule or join the meetings. Moderators have extended functionality which is: user moderation, live-time monitoring or generating report by the end of the meeting",
        photo: '',
        link: 'https://muchat.infostrategic.com/swagger/index.html',
        stack: 'ASP.NET Core, Entity Framework (DB First), flask, selenium web driver, jitsi-meet, Oracle DB, swagger, JWT Auth'
    }
]

export const Projects = () => {
    
    return (
        <div>
            {myProjects.map((project) => 
                <div key={project.title}>
                    <h1 style={{ textAlign: 'center' }}>{project.title}</h1>
                    <h2>Description</h2>
                    <p>{project.description}</p>
                    <h2>Used stack</h2>
                    <p>{project.stack}</p>
                </div>
            )}
        </div>
    );
}