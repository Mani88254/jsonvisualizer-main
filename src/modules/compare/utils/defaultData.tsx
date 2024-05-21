// export const JSON_original = `[
//     "hello 1",
//     "hello 2",
//     ["hello 3", "helo 4"],
//     {
//         "company": "Amazon.com",
//         "description": "Amazon.com, Inc. is an online retailer in North America and internationally. The company serves consumers through its retail Web sites and focuses on selection, price, and convenience. It also offers programs that enable sellers to sell their products on its Web sites, and their own branded Web sites. In addition, the company serves developer customers through Amazon Web Services, which provides access to technology infrastructure that developers can use to enable virtually various type of business. Further, it manufactures and sells the Kindle e-reader. Founded in 1994 and headquartered in Seattle, Washington.",
//         "initial_price": 89.38,
//         "price_2002": 17.01,
//         "price_2007": 93.43,
//         "symbol": "AMZN"
//     },
//     {
//         "company": "Disney",
//         "description": "The Walt Disney Company, founded in 1923, is a worldwide entertainment company, with movies, cable networks, radio networks, movie production, musical recordings and live stage plays. Disney also operates Walt Disney World in Florida and Disneyland in California, Disney Cruise Line, and international Disney resorts. Disney owns countless licenses and literary properties and publishes books and magazines.",
//         "initial_price": 40.68,
//         "price_2002": 15.24,
//         "price_2007": 35.47,
//         "symbol": "DIS"
//     },
//     {
//         "company": "Hewlett Packard",
//         "description": "Hewlett-Packard designs and sells products, technologies, software and IT services to consumers, businesses, government and education sectors worldwide. HP offers storage and server products, PCs, calculators, printers, scanners, network infrastructure products, video products (under the Halo brand), and Palm smartphones. HP was founded in 1939 and is headquartered in Palo Alto, California.",
//         "initial_price": 66.28,
//         "price_2002": 12.03,
//         "price_2007": 50.9,
//         "symbol": "HPQ"
//     },
//     {
//         "company": "IBM",
//         "description": "IBM is an international IT company. IBM offers infrastructure and technology services, software for business integration and information management, data warehousing, identity management software, data security, Lotus software for collaboration, messaging and social networking, business intelligence software, servers, and storage systems. IBM was founded in 1910 and is based in Armonk, New York.",
//         "price_2007": 116.3,
//         "symbol": "IBM"
//     },
// ]
// `;

export const JSON_original = `{
  "company": {
    "name": "Tech Innovators Inc.",
    "location": "San Francisco",
    "founded": 2010,
    "employees": [
      {
        "id": 1,
        "name": "Alice Johnson",
        "position": "CEO",
        "salary": 150000,
        "projects": [
          {
            "name": "Project Alpha",
            "status": "Completed"
          },
          {
            "name": "Project Beta",
            "status": "Ongoing"
          }
        ]
      },
      {
        "id": 2,
        "name": "Bob Smith",
        "position": "CTO",
        "salary": 140000,
        "projects": [
          {
            "name": "Project Gamma",
            "status": "Completed"
          },
          {
            "name": "Project Delta",
            "status": "Ongoing"
          }
        ]
      }
    ],
    "departments": {
      "engineering": {
        "head": "Bob Smith",
        "budget": 500000,
        "teams": [
          {
            "name": "Frontend",
            "lead": "Carol Williams",
            "members": 10
          },
          {
            "name": "Backend",
            "lead": "David Brown",
            "members": 8
          }
        ]
      },
      "hr": {
        "head": "Eve Davis",
        "budget": 100000,
        "teams": [
          {
            "name": "Recruitment",
            "lead": "Frank Harris",
            "members": 5
          },
          {
            "name": "Employee Relations",
            "lead": "Grace Clark",
            "members": 4
          }
        ]
      }
    },
    "products": [
      {
        "id": "P1",
        "name": "Tech Gadget",
        "category": "Electronics",
        "price": 299.99,
        "stock": 1500,
        "reviews": [
          {
            "reviewer": "John Doe",
            "rating": 4.5,
            "comment": "Great product!"
          },
          {
            "reviewer": "Jane Smith",
            "rating": 4.0,
            "comment": "Very useful but a bit pricey."
          }
        ]
      },
      {
        "id": "P2",
        "name": "Innovative Software",
        "category": "Software",
        "price": 99.99,
        "stock": 500,
        "reviews": [
          {
            "reviewer": "Alice Martin",
            "rating": 5.0,
            "comment": "Excellent software with amazing features."
          },
          {
            "reviewer": "Bob Lee",
            "rating": 3.5,
            "comment": "Good but has some bugs."
          }
        ]
      }
    ]
  }
}
`;
