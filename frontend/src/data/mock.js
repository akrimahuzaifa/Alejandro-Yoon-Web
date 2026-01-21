// Mock data for Yunere landing page

export const mockWaitlistSubmission = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock waitlist submission:', formData);
      resolve({
        success: true,
        message: 'Successfully joined the waitlist!',
        data: { id: `mock_${Date.now()}`, ...formData }
      });
    }, 1000);
  });
};

export const mockResources = [
  {
    id: 1,
    type: 'blog',
    title: 'The Hidden Costs of Manual CAM Reconciliations',
    description: 'Discover how manual processes are costing your business time, money, and tenant relationships.',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
  },
  {
    id: 2,
    type: 'case-study',
    title: 'How ABC Properties Reduced CAM Time by 80%',
    description: 'A mid-size property manager shares their transformation story from weeks to days.',
    date: '2024-03-10',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg'
  },
  {
    id: 3,
    type: 'blog',
    title: 'Understanding CAM Reconciliation: A Complete Guide',
    description: 'Everything property managers need to know about CAM reconciliations in 2024.',
    date: '2024-03-05',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg'
  }
];

export const mockFeatures = [
  {
    icon: 'Clock',
    title: 'Save Weeks of Work',
    description: 'Close CAM reconciliations in days instead of weeks or months. Automated lease reading eliminates manual data entry.'
  },
  {
    icon: 'Target',
    title: 'Pinpoint Accuracy',
    description: 'Eliminate calculation errors with AI-powered lease interpretation and expense allocation based on exact lease terms.'
  },
  {
    icon: 'Shield',
    title: 'Dispute-Proof Reports',
    description: 'Generate defensible CAM summaries with complete audit trails. Confidently respond to tenant questions.'
  },
  {
    icon: 'FileText',
    title: 'Smart Lease Parsing',
    description: 'Automatically extract CAM terms, square footage, and allocation rules from any lease format (PDF/DOCX).'
  },
  {
    icon: 'Database',
    title: 'Seamless Data Import',
    description: 'Import rent rolls and GL exports directly. Compare data across sources to catch discrepancies instantly.'
  },
  {
    icon: 'TrendingUp',
    title: 'Actionable Insights',
    description: 'Get clear visibility into expense allocation, recovery rates, and potential disputes before they happen.'
  }
];

export const mockTestimonials = [
  {
    name: 'Sarah Chen',
    role: 'Property Manager',
    company: 'Metro Commercial Properties',
    quote: 'Yunere transformed our CAM process. What used to take 3 weeks now takes 2 days. Our tenants appreciate the faster turnaround too.',
    avatar: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Owner',
    company: 'Rodriguez Real Estate Group',
    quote: 'The defensibility feature is a game-changer. We have not had a single CAM dispute since implementing Yunere.',
    avatar: 'MR'
  }
];

export const mockStats = [
  { value: '80%', label: 'Time Saved' },
  { value: '99.9%', label: 'Accuracy Rate' },
  { value: '500K+', label: 'SF Managed' },
  { value: '0', label: 'Disputes' }
];
