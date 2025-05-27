import { CyberElement, ElementCategory } from '../types';

export const cyberElements: CyberElement[] = [
  // Row 1
  {
    id: "1",
    symbol: "FW",
    name: "Firewall",
    category: ElementCategory.Security,
    number: 1,
    description: "A network security device that monitors and filters incoming and outgoing network traffic based on predetermined security rules."
  },
  {
    id: "2",
    symbol: "OS",
    name: "Operating System",
    category: ElementCategory.Software,
    number: 2,
    description: "The software that supports a computer's basic functions and provides services to applications."
  },
  {
    id: "3",
    symbol: "IP",
    name: "Internet Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 3,
    description: "The principal communications protocol for relaying packets across network boundaries in the Internet Protocol Suite."
  },
  {
    id: "4",
    symbol: "CPU",
    name: "Central Processing Unit",
    category: ElementCategory.Hardware,
    number: 4,
    description: "The electronic circuitry that executes instructions of a computer program, performing arithmetic, logic, controlling, and I/O operations."
  },
  {
    id: "5",
    symbol: "SSH",
    name: "Secure Shell",
    category: ElementCategory.NetworkProtocol,
    number: 5,
    description: "A cryptographic network protocol for secure operations over an unsecured network."
  },
  {
    id: "6",
    symbol: "PKI",
    name: "Public Key Infrastructure",
    category: ElementCategory.Cryptography,
    number: 6,
    description: "A set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store and revoke digital certificates."
  },
  {
    id: "7",
    symbol: "VM",
    name: "Virtual Machine",
    category: ElementCategory.Cloud,
    number: 7,
    description: "An emulation of a computer system that provides the functionality of a physical computer."
  },
  {
    id: "8",
    symbol: "ML",
    name: "Machine Learning",
    category: ElementCategory.DataScience,
    number: 8,
    description: "A field of AI that uses statistical techniques to give computer systems the ability to learn from data."
  },
  
  // Row 2
  {
    id: "9",
    symbol: "IDS",
    name: "Intrusion Detection System",
    category: ElementCategory.Security,
    number: 9,
    description: "A device or software application that monitors a network for malicious activity or policy violations."
  },
  {
    id: "10",
    symbol: "DB",
    name: "Database",
    category: ElementCategory.Software,
    number: 10,
    description: "An organized collection of data stored and accessed electronically."
  },
  {
    id: "11",
    symbol: "TCP",
    name: "Transmission Control Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 11,
    description: "A core protocol of the Internet Protocol Suite providing reliable, ordered, and error-checked delivery of data between applications."
  },
  {
    id: "12",
    symbol: "RAM",
    name: "Random Access Memory",
    category: ElementCategory.Hardware,
    number: 12,
    description: "A form of computer memory that can be read and changed in any order, typically used to store working data and machine code."
  },
  {
    id: "13",
    symbol: "DNS",
    name: "Domain Name System",
    category: ElementCategory.NetworkProtocol,
    number: 13,
    description: "A hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network."
  },
  {
    id: "14",
    symbol: "RSA",
    name: "RSA Encryption",
    category: ElementCategory.Cryptography,
    number: 14,
    description: "A public-key cryptosystem widely used for secure data transmission. The acronym stands for Rivest–Shamir–Adleman."
  },
  {
    id: "15",
    symbol: "S3",
    name: "Simple Storage Service",
    category: ElementCategory.Cloud,
    number: 15,
    description: "An object storage service offering industry-leading scalability, data availability, security, and performance."
  },
  {
    id: "16",
    symbol: "AI",
    name: "Artificial Intelligence",
    category: ElementCategory.DataScience,
    number: 16,
    description: "The simulation of human intelligence processes by machines, especially computer systems."
  },
  
  // Row 3
  {
    id: "17",
    symbol: "VPN",
    name: "Virtual Private Network",
    category: ElementCategory.Security,
    number: 17,
    description: "Extends a private network across a public network, enabling users to send and receive data as if their devices were directly connected to the private network."
  },
  {
    id: "18",
    symbol: "API",
    name: "Application Programming Interface",
    category: ElementCategory.Software,
    number: 18,
    description: "A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service."
  },
  {
    id: "19",
    symbol: "HTTP",
    name: "Hypertext Transfer Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 19,
    description: "An application protocol for distributed, collaborative, hypermedia information systems, the foundation of data communication for the World Wide Web."
  },
  {
    id: "20",
    symbol: "GPU",
    name: "Graphics Processing Unit",
    category: ElementCategory.Hardware,
    number: 20,
    description: "A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer."
  },
  {
    id: "21",
    symbol: "DHCP",
    name: "Dynamic Host Configuration Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 21,
    description: "A network management protocol used on Internet Protocol networks for automatically assigning IP addresses and other communication parameters."
  },
  {
    id: "22",
    symbol: "AES",
    name: "Advanced Encryption Standard",
    category: ElementCategory.Cryptography,
    number: 22,
    description: "A specification for the encryption of electronic data established by the U.S. National Institute of Standards and Technology."
  },
  {
    id: "23",
    symbol: "EC2",
    name: "Elastic Compute Cloud",
    category: ElementCategory.Cloud,
    number: 23,
    description: "A web service that provides secure, resizable compute capacity in the cloud."
  },
  {
    id: "24",
    symbol: "NLP",
    name: "Natural Language Processing",
    category: ElementCategory.DataScience,
    number: 24,
    description: "A subfield of AI concerned with the interactions between computers and human language."
  },
  
  // Row 4
  {
    id: "25",
    symbol: "MFA",
    name: "Multi-Factor Authentication",
    category: ElementCategory.Security,
    number: 25,
    description: "An authentication method requiring the user to provide two or more verification factors to gain access to a resource."
  },
  {
    id: "26",
    symbol: "IDE",
    name: "Integrated Development Environment",
    category: ElementCategory.Software,
    number: 26,
    description: "A software application that provides comprehensive facilities to computer programmers for software development."
  },
  {
    id: "27",
    symbol: "UDP",
    name: "User Datagram Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 27,
    description: "A communications protocol used primarily for establishing low-latency and loss-tolerating connections between applications on the internet."
  },
  {
    id: "28",
    symbol: "SSD",
    name: "Solid State Drive",
    category: ElementCategory.Hardware,
    number: 28,
    description: "A storage device that uses integrated circuit assemblies to store data persistently, typically using flash memory."
  },
  {
    id: "29",
    symbol: "SMTP",
    name: "Simple Mail Transfer Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 29,
    description: "A communication protocol for electronic mail transmission."
  },
  {
    id: "30",
    symbol: "SHA",
    name: "Secure Hash Algorithm",
    category: ElementCategory.Cryptography,
    number: 30,
    description: "A family of cryptographic hash functions used to generate digital fingerprints of files or data."
  },
  {
    id: "31",
    symbol: "CDN",
    name: "Content Delivery Network",
    category: ElementCategory.Cloud,
    number: 31,
    description: "A geographically distributed group of servers that work together to provide fast delivery of Internet content."
  },
  {
    id: "32",
    symbol: "DL",
    name: "Deep Learning",
    category: ElementCategory.DataScience,
    number: 32,
    description: "A subset of machine learning based on artificial neural networks with representation learning."
  },
  
  // Row 5
  {
    id: "33",
    symbol: "WAF",
    name: "Web Application Firewall",
    category: ElementCategory.Security,
    number: 33,
    description: "A firewall that monitors, filters, or blocks HTTP traffic to and from a web application."
  },
  {
    id: "34",
    symbol: "CMS",
    name: "Content Management System",
    category: ElementCategory.Software,
    number: 34,
    description: "A software application that allows users to create, edit, collaborate on, publish and store digital content."
  },
  {
    id: "35",
    symbol: "FTP",
    name: "File Transfer Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 35,
    description: "A standard network protocol used for the transfer of computer files between a client and server on a computer network."
  },
  {
    id: "36",
    symbol: "USB",
    name: "Universal Serial Bus",
    category: ElementCategory.Hardware,
    number: 36,
    description: "An industry standard that establishes specifications for cables, connectors and protocols for connection, communication and power supply between computers and devices."
  },
  {
    id: "37",
    symbol: "VoIP",
    name: "Voice over Internet Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 37,
    description: "A technology that allows voice calls to be made over the Internet instead of a regular telephone line."
  },
  {
    id: "38",
    symbol: "PGP",
    name: "Pretty Good Privacy",
    category: ElementCategory.Cryptography,
    number: 38,
    description: "An encryption program providing cryptographic privacy and authentication for data communication."
  },
  {
    id: "39",
    symbol: "k8s",
    name: "Kubernetes",
    category: ElementCategory.Cloud,
    number: 39,
    description: "An open-source container-orchestration system for automating application deployment, scaling, and management."
  },
  {
    id: "40",
    symbol: "NN",
    name: "Neural Network",
    category: ElementCategory.DataScience,
    number: 40,
    description: "A series of algorithms that endeavors to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates."
  },
  
  // Row 6
  {
    id: "41",
    symbol: "DLP",
    name: "Data Loss Prevention",
    category: ElementCategory.Security,
    number: 41,
    description: "A strategy for ensuring that end users do not send sensitive or critical information outside the corporate network."
  },
  {
    id: "42",
    symbol: "ORM",
    name: "Object-Relational Mapping",
    category: ElementCategory.Software,
    number: 42,
    description: "A programming technique for converting data between incompatible type systems using object-oriented programming languages."
  },
  {
    id: "43",
    symbol: "BGP",
    name: "Border Gateway Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 43,
    description: "A standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems on the Internet."
  },
  {
    id: "44",
    symbol: "NIC",
    name: "Network Interface Card",
    category: ElementCategory.Hardware,
    number: 44,
    description: "A hardware component that connects a computer to a computer network."
  },
  {
    id: "45",
    symbol: "SNMP",
    name: "Simple Network Management Protocol",
    category: ElementCategory.NetworkProtocol,
    number: 45,
    description: "An Internet Standard protocol for collecting and organizing information about managed devices on IP networks."
  },
  {
    id: "46",
    symbol: "TLS",
    name: "Transport Layer Security",
    category: ElementCategory.Cryptography,
    number: 46,
    description: "Cryptographic protocols designed to provide communications security over a computer network."
  },
  {
    id: "47",
    symbol: "CI",
    name: "Continuous Integration",
    category: ElementCategory.Programming,
    number: 47,
    description: "The practice of merging all developers' working copies to a shared mainline several times a day."
  },
  {
    id: "48",
    symbol: "ETL",
    name: "Extract, Transform, Load",
    category: ElementCategory.DataScience,
    number: 48,
    description: "The process of copying data from one or more sources into a destination system that represents the data differently."
  },
  
  // Row 7
  {
    id: "49",
    symbol: "EDR",
    name: "Endpoint Detection & Response",
    category: ElementCategory.Security,
    number: 49,
    description: "A technology addressing the need for continuous monitoring and response to advanced threats."
  },
  {
    id: "50",
    symbol: "Git",
    name: "Git Version Control",
    category: ElementCategory.Software,
    number: 50,
    description: "A distributed version-control system for tracking changes in source code during software development."
  },
  {
    id: "51",
    symbol: "VLAN",
    name: "Virtual Local Area Network",
    category: ElementCategory.NetworkProtocol,
    number: 51,
    description: "Any broadcast domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2)."
  },
  {
    id: "52",
    symbol: "RAID",
    name: "Redundant Array of Disks",
    category: ElementCategory.Hardware,
    number: 52,
    description: "A data storage virtualization technology that combines multiple physical disk drive components into one or more logical units."
  },
  {
    id: "53",
    symbol: "IPsec",
    name: "Internet Protocol Security",
    category: ElementCategory.NetworkProtocol,
    number: 53,
    description: "A secure network protocol suite that authenticates and encrypts the packets of data sent over an internet protocol network."
  },
  {
    id: "54",
    symbol: "2FA",
    name: "Two-Factor Authentication",
    category: ElementCategory.Security,
    number: 54,
    description: "A security process in which the user provides two different authentication factors to verify themselves."
  },
  {
    id: "55",
    symbol: "CD",
    name: "Continuous Deployment",
    category: ElementCategory.Programming,
    number: 55,
    description: "A software engineering approach in which software functionality is delivered frequently and through automated deployments."
  },
  {
    id: "56",
    symbol: "BI",
    name: "Business Intelligence",
    category: ElementCategory.DataScience,
    number: 56,
    description: "Strategies and technologies used by enterprises for the data analysis of business information."
  }
];

export const categoryInfo: Record<ElementCategory, { color: string, hoverColor: string, textColor: string }> = {
  [ElementCategory.Security]: { 
    color: '#ef4444', 
    hoverColor: '#dc2626', 
    textColor: '#ffffff' 
  },
  [ElementCategory.Software]: { 
    color: '#3b82f6', 
    hoverColor: '#2563eb', 
    textColor: '#ffffff' 
  },
  [ElementCategory.NetworkProtocol]: { 
    color: '#10b981', 
    hoverColor: '#059669', 
    textColor: '#ffffff' 
  },
  [ElementCategory.Hardware]: { 
    color: '#f97316', 
    hoverColor: '#ea580c', 
    textColor: '#ffffff' 
  },
  [ElementCategory.Cryptography]: { 
    color: '#8b5cf6', 
    hoverColor: '#7c3aed', 
    textColor: '#ffffff' 
  },
  [ElementCategory.Cloud]: { 
    color: '#06b6d4', 
    hoverColor: '#0891b2', 
    textColor: '#ffffff' 
  },
  [ElementCategory.DataScience]: { 
    color: '#ec4899', 
    hoverColor: '#db2777', 
    textColor: '#ffffff' 
  },
  [ElementCategory.Programming]: { 
    color: '#14b8a6', 
    hoverColor: '#0d9488', 
    textColor: '#ffffff' 
  }
};