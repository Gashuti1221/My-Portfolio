import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'pharmacy',
    title: 'MediTrack_Pharmacy Management System',
    description: 'This pharmacy management system helps manage medicines, suppliers, sales, and customer records efficiently. It allows pharmacists to track inventory, update stock, process sales, and manage supplier information seamlessly. The application is built using Java, JavaFX for the interface, and SQL Server for database management.',
    image: '/images/projects/pharmacyM.png',
    technologies: ['Java', 'JavaFX', 'SQL Server'],
    liveUrl: 'https://github.com/Gashuti1221/java-phar-manag-sys-project/archive/refs/tags/v1.0.0.zip',
    githubUrl: 'https://github.com/Gashuti1221/java-phar-manag-sys-project',
    featured: true
  },
  {
    id: 'onlinebookstore',
    title: 'Online Bookstore App',    
    description: 'A comprehensive online bookstore application that allows users to browse, search, and add, remove books. Features include book inventory management, shopping cart functionality, and an interactive interface for a seamless shopping experience.',
    image: '/images/projects/bookStore.png',
    technologies: ['React', 'JavaScript', 'Redux', 'CSS'],
    liveUrl: 'https://react-bookshelf-ivory.vercel.app',
    githubUrl: 'https://github.com/Gashuti1221/react-bookshelf',
    featured: true
  },
  {
    id: 'calculator',
    title: 'CalcMagic_Smart Calculator App',
    description: 'An interactive calculator application that performs basic and advanced mathematical operations. Built with React, JavaScript, and CSS, featuring a responsive and user-friendly interface for a seamless experience across all devices.',
    image: '/images/projects/calculator.png',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://react-math-magician-calculator.vercel.app',
    githubUrl: 'https://github.com/Gashuti1221/react-math-magician-calculator',
    featured: true
  }
]
