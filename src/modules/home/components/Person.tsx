import Image from 'next/image';

const persons = [
  {
    name: 'PREMKUMAR PERUMAL',
    role: 'FULL STACK DEVELOPER',
    avatar: '/icons/photo_6253656139313038787_y-2.jpg',
    github: 'https://github.com/23CABPREMKUMARP',
    linkedin:
      'https://www.linkedin.com/in/premkumar-perumal-6a1b27285/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/mr.premofficial_11?igsh=OGQ5ZDc2ODk2ZA%3D%3D',
  },
];

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition duration-300 px-6 py-8 flex flex-col items-center text-center rounded-xl border-2 border-cyan-400 shadow-lg neon-border hover:scale-105">
    {children}
  </div>
);

const ProfileSocial = ({
  github,
  linkedin,
  instagram,
}: {
  github: string;
  linkedin: string;
  instagram: string;
}) => (
  <div className="flex gap-4 mt-4">
    <a href={github} target="_blank" rel="noreferrer">
      <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
    </a>
    <a href={linkedin} target="_blank" rel="noreferrer">
      <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
    </a>
    <a href={instagram} target="_blank" rel="noreferrer">
      <Image src="/images/Unknownb.png" alt="Instagram" width={24} height={24} />
    </a>
  </div>
);

export default function Person() {
  return (
    <>
      {persons.map((person) => (
        <PersonCard key={person.name}>
          <Image
            src={person.avatar}
            alt={person.name}
            className="rounded-full"
            height={96}
            width={96}
          />
          <p className="text-resume-800 mt-4 font-bold">{person.name}</p>
          <p className="text-resume-400 mb-6">{person.role}</p>
          <ProfileSocial
            github={person.github}
            linkedin={person.linkedin}
            instagram={person.instagram}
          />
        </PersonCard>
      ))}
    </>
  );
}
