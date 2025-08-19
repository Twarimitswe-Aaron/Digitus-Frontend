export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  region: string;
  status: 'current' | 'upcoming' | 'completed';
  startDate: string;
  endDate?: string;
  participantsCount?: number;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  quote: string;
  image: string;
  achievement: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Mindset Change Workshops",
    description: "Engaging, interactive sessions designed to build confidence and excitement for digital learning, helping participants overcome technology anxiety.",
    image: "./../img/mindset.png",
    icon: "Users"
  },
  {
    id: 2,
    title: "Guidance to National Facilities",
    description: "Connecting learners with nearby government-sponsored digital training centers and free educational resources to continue their learning journey.",
    image: "../../img/facilities.png",
    icon: "MapPin"
  },
  {
    id: 3,
    title: "Local Digital Hubs",
    description: "Community centers equipped with free devices and internet access where learners can practice, explore, and continue developing their digital skills.",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "Wifi"
  },
  {
    id: 4,
    title: "Competitions & Awards",
    description: "Fun contests and recognition programs that encourage ongoing learning and celebrate learners’ digital achievements.",
    image: "../../img/trophy.jpeg",
    
    icon: "Award"
  }
];

export const processSteps: ProcessStep[] = [
 {
  id: 1,
  title: "Community Arrival",
  description: "Our dedicated team visits your community to help those struggling with digital illiteracy. We set up mobile learning stations and carry out friendly assessments to understand each learner’s needs.",
  duration: "Week 1",
  image: "../../img/communityArrival.webp"
},
{
  id: 2,
  title: "Guided Learning",
  description: "Supportive, hands-on workshops that cover everyday essentials like using a smartphone, staying safe online, accessing digital services, video calling loved ones, and online banking.",
  duration: "Weeks 2–3",
  image: "../../img/guidedLearning.jpeg"
},
{
  id: 3,
  title: "Continued Support",
  description: "We don’t stop after training. Learners receive ongoing guidance through regular check-ins, fun monthly challenges, and access to our network of digital hubs and online resources.",
  duration: "Ongoing",
  image: "../../img/continuedSupport.png"
}

];

export const locations: Location[] = [
  {
    id: 1,
    name: "Springfield Community Center",
    region: "Midwest Region",
    status: "current",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    participantsCount: 45,
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Riverside Senior Center",
    region: "West Coast",
    status: "upcoming",
    startDate: "2024-03-01",
    endDate: "2024-03-30",
    image: "https://images.pexels.com/photos/8349271/pexels-photo-8349271.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Mountain View Library",
    region: "Mountain States",
    status: "upcoming",
    startDate: "2024-04-15",
    endDate: "2024-05-15",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    name: "Oakwood Community Hall",
    region: "Southeast",
    status: "completed",
    startDate: "2023-11-01",
    endDate: "2023-11-30",
    participantsCount: 38,
    image: "https://images.pexels.com/photos/8349272/pexels-photo-8349272.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    name: "Pine Valley Recreation Center",
    region: "Northeast",
    status: "completed",
    startDate: "2023-09-15",
    endDate: "2023-10-15",
    participantsCount: 52,
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Margaret Thompson",
    age: 68,
    location: "Springfield",
    quote: "I never thought I'd be able to video call my grandchildren, but now I do it every week! This program changed my life.",
    image: "https://images.pexels.com/photos/8349271/pexels-photo-8349271.jpeg?auto=compress&cs=tinysrgb&w=300",
    achievement: "First video call with family"
  },
  {
    id: 2,
    name: "Robert Chen",
    age: 72,
    location: "Riverside",
    quote: "Online banking seemed impossible before. Now I manage all my finances digitally and feel so much more independent.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300",
    achievement: "Digital banking mastery"
  },
  {
    id: 3,
    name: "Dorothy Williams",
    age: 65,
    location: "Oakwood",
    quote: "The patient instructors made all the difference. I went from being afraid of smartphones to teaching my neighbors!",
    image: "https://images.pexels.com/photos/8349272/pexels-photo-8349272.jpeg?auto=compress&cs=tinysrgb&w=300",
    achievement: "Community digital mentor"
  },
  {
    id: 4,
    name: "James Rodriguez",
    age: 70,
    location: "Pine Valley",
    quote: "I can now order groceries online, book doctor appointments, and stay connected with my community. Technology isn't scary anymore!",
    image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=300",
    achievement: "Digital independence achieved"
  }
];

export const heroData = {
  headline: "Empowering [Everyone] in the Digital Age",
  subheadline: "Breaking down barriers and building bridges to digital literacy for older adults in communities across the nation.",
  ctaText: "Join the Movement",
  backgroundImage: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920"
};

export const callToActionData = {
  title: "Ready to Make a Difference?",
  subtitle: "Join our mission to bridge the digital divide and empower communities",
  actions: [
    {
      title: "Volunteer",
      description: "Share your digital skills and help teach others",
      buttonText: "Become a Volunteer",
      icon: "Heart"
    },
    {
      title: "Donate Devices",
      description: "Help us equip digital hubs with tablets and smartphones",
      buttonText: "Donate Now",
      icon: "Smartphone"
    },
    {
      title: "Join Training",
      description: "Sign up for our next community training session",
      buttonText: "Register Today",
      icon: "BookOpen"
    }
  ]
};