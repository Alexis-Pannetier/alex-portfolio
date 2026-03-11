export interface EducationDetail {
  title: string;
  label?: string;
  url?: string;
}

export interface Education {
  title: string;
  startDate: string;
  endDate?: string;
  school: string;
  location: string;
  description: string;
  detail?: EducationDetail;
  lab?: string;
  website?: string;
  currentUni: boolean;
  type: "degree" | "training";
}

const education: Education[] = [
  {
    title: "Master Fullstack",
    startDate: "2019-09-01",
    endDate: "2022-06-30",
    school: "MyDigitalSchool",
    location: "France",
    description: "Formation en alternance orientée développement web fullstack.",
    detail: {
      title: "Titre RNCP : Concepteur Développeur d'Application",
      label: "Concepteur Développeur d'Application",
      url: "https://certificate.bcdiploma.com/check/8B344BD9B8E26309A1FD100E5AD4A291E08101B265DD39336A081F7C48988846dEkzVzc1RVp4V1JzekIxQkdVRzJEZjBtUlVjbXV3ZzVQUTFYelFuanJiZWFqdGNp"
    },
    website: "https://www.mydigitalschool.com/",
    currentUni: false,
    type: "degree",
  },
  {
    title: "Titre RNCP - Concepteur Développeur d'Application",
    startDate: "2017-09-01",
    endDate: "2019-06-30",
    school: "IMIE",
    location: "France",
    description: "Parcours en alternance axé sur la conception et le développement logiciel.",
    detail: {
      title: "Parcours alternance développeur logiciel",
      label: "Développeur logiciel",
      url: "https://www.francecompetences.fr/recherche/rncp/31678/"
    },
    website: "https://www.imie.fr/",
    currentUni: false,
    type: "degree",
  }
];

export default education;