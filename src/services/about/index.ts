interface AboutApplication {
    author: string;
    githubUrl: URL;
    version?: string;
}

const about: AboutApplication = {
    author: "@gitman69420",
    githubUrl: new URL("https://github.com/gitman69420"),
}

const getAboutInformation = async () => {
    return await new Promise((resolve) => resolve(about)) 
}

export default getAboutInformation;