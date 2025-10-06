export const testimonials = [
  {
    id: 1,
    name: 'Rashida Begum',
    location: 'Dhaka, Bangladesh',
    avatar: '/assets/customers/customer-1.svg',
    rating: 5,
    text: "I've been using Medident for 6 months now, and my sensitivity issues are completely gone. Great local product!",
    date: '2024-06-15'
  },
  {
    id: 2,
    name: 'Karim Ahmed',
    location: 'Chittagong, Bangladesh',
    avatar: '/assets/customers/customer-2.svg',
    rating: 5,
    text: "Finally, a Bangladeshi toothpaste that works as well as international brands. Proud to support local business.",
    date: '2024-07-02'
  },
  {
    id: 3,
    name: 'Dr. Fatima Khan',
    location: 'Sylhet, Bangladesh',
    avatar: '/assets/customers/customer-3.svg',
    rating: 5,
    text: "My dentist recommended Medident, and I can now enjoy cold drinks without pain. Excellent value for money.",
    date: '2024-07-20'
  }
];

export const productReviews = [
  {
    id: 1,
    reviewer: {
      name: 'Fatima Rahman',
      avatar: '/assets/customers/reviewer-1.svg',
      verified: false
    },
    rating: 5,
    title: 'Excellent results for sensitive teeth!',
    content: "I've been using Medident for a month now, and the difference is amazing. I can finally enjoy cold drinks without pain. Great local product!",
    date: '2024-11-15',
    helpful: {
      yes: 12,
      no: 0
    }
  },
  {
    id: 2,
    reviewer: {
      name: 'Abdul Karim',
      avatar: '/assets/customers/reviewer-2.svg',
      verified: false
    },
    rating: 5,
    title: 'Better than international brands',
    content: "I was skeptical at first, but Medident works better than the expensive imported toothpastes I used to buy. Proud to support local business.",
    date: '2024-10-20',
    helpful: {
      yes: 8,
      no: 1
    }
  },
  {
    id: 3,
    reviewer: {
      name: 'Dr. Nasreen Sultana',
      avatar: '/assets/customers/reviewer-3.svg',
      verified: true
    },
    rating: 5,
    title: 'Recommended by a dentist',
    content: "As a dental professional, I recommend Medident to my patients. The formula is effective and the quality is excellent for a local brand.",
    date: '2024-09-10',
    helpful: {
      yes: 15,
      no: 0
    }
  }
];

export const reviewStats = {
  overall: 4.8,
  totalReviews: 234,
  breakdown: {
    5: 75,
    4: 18,
    3: 5,
    2: 1,
    1: 1
  }
};