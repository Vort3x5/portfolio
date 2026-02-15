export interface Project {
  name: string;
  repo: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  // Systems & Low-Level
  {
    name: 'Base',
    repo: 'Vort3x5/Base',
    category: 'Systems & Low-Level',
    tags: ['OS', 'Assembly', 'Low-Level'],
    featured: true,
  },
  {
    name: 'NixConfig',
    repo: 'Vort3x5/NixConfig',
    category: 'Systems & Low-Level',
    tags: ['Nix', 'Dotfiles', 'Configuration'],
  },

  // Embedded & Hardware
  {
    name: 'STMagnet',
    repo: 'Vort3x5/STMagnet',
    category: 'Embedded & Hardware',
    tags: ['STM32', 'Embedded', 'Hardware'],
    featured: true,
  },
  {
    name: 'STM32-ESP32',
    repo: 'Vort3x5/STM32-ESP32',
    category: 'Embedded & Hardware',
    tags: ['STM32', 'ESP32', 'IoT'],
  },

  // Cybersecurity & HDL
  {
    name: 'AresDSP',
    repo: 'Vort3x5/AresDSP',
    category: 'Cybersecurity & HDL',
    tags: ['HDL', 'FSM', 'Security'],
    featured: true,
  },

  // Game Development
  {
    name: 'CaveGame2D',
    repo: 'Vort3x5/CaveGame2D',
    category: 'Game Development',
    tags: ['Python', 'Pygame', 'Game'],
  },
  {
    name: 'Cmpl',
    repo: 'Vort3x5/Cmpl',
    category: 'Game Development',
    tags: ['Compiler', 'Language Design', 'Game Engine'],
    featured: true,
  },

  // Tools & Utilities
  {
    name: 'LuaSpicyHot',
    repo: 'Vort3x5/LuaSpicyHot',
    category: 'Tools & Utilities',
    tags: ['Lua', 'LTspice', 'Circuit Simulation'],
  },
  {
    name: 'MapPy',
    repo: 'Vort3x5/MapPy',
    category: 'Tools & Utilities',
    tags: ['Python', 'Visualization'],
  },

  // Algorithms
  {
    name: 'OI_Prep',
    repo: 'Vort3x5/OI_Prep',
    category: 'Algorithms',
    tags: ['Algorithms', 'Competitive Programming', 'C++'],
  },
  {
    name: 'Visual-Sort',
    repo: 'Vort3x5/Visual-Sort',
    category: 'Algorithms',
    tags: ['Sorting', 'Visualization', 'C++'],
  },
];

export const categories = [
  { 
    name: 'Systems & Low-Level',
    description: 'Operating systems, bootloaders, and system configuration'
  },
  { 
    name: 'Embedded & Hardware',
    description: 'Microcontroller projects and hardware interfacing'
  },
  { 
    name: 'Cybersecurity & HDL',
    description: 'Hardware description language and security systems'
  },
  { 
    name: 'Game Development',
    description: 'Games and game engine development'
  },
  { 
    name: 'Tools & Utilities',
    description: 'Developer tools and utility applications'
  },
  { 
    name: 'Algorithms',
    description: 'Algorithmic solutions and competitive programming'
  },
];
