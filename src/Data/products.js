const PRODUCTS = [
	// Previously provided entries...

	{
		image_name: 'ConferenceTable-3Furnicap.webp',
		product_name: 'Conference Table Model 3',
		price: '17999',
		category: 'Conference Tables',
		dimensions: '220cm x 90cm x 75cm',
		weight: '35kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'Engineered Wood with Metal Frame',
		disclaimers: 'Color may slightly vary based on lighting.',
		brand_and_collection_overview:
			'Furnicap Innovatives conference tables combine style and functionality, making them perfect for collaborative workspaces.',
		care_and_maintenance:
			'Wipe clean with a dry cloth, avoid abrasive cleaners.',
		seller_details:
			'Furnicap Innovatives - Premier provider of modern office furniture across India.',
		QA: 'Does this table come with power outlet options? - Power modules can be customized.',
	},
	{
		image_name: 'ConferenceTable-4Furnicap.webp',
		product_name: 'Conference Table Model 4',
		price: '18499',
		category: 'Conference Tables',
		dimensions: '240cm x 100cm x 75cm',
		weight: '38kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'Laminate Wood with Aluminum Legs',
		disclaimers: 'Surface finish may vary slightly due to manufacturing.',
		brand_and_collection_overview:
			'Modern design with a sturdy build, this table from Furnicap Innovatives is crafted for premium conference rooms.',
		care_and_maintenance: 'Avoid direct sunlight, clean with a mild cloth.',
		seller_details:
			'Furnicap Innovatives - Providing reliable conference furniture for professional environments.',
		QA: 'Does this model support additional attachments? - Optional cable trays are available.',
	},
	{
		image_name: 'DinningChair-3Furnicap.webp',
		product_name: 'Dining Chair Model 3',
		price: '3499',
		category: 'Dining Chairs',
		dimensions: '43cm x 47cm x 86cm',
		weight: '4.5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Teak Wood and Polyester Upholstery',
		disclaimers: 'Fabric may vary slightly based on batch.',
		brand_and_collection_overview:
			'Elegant and durable, Furnicap Innovatives offers dining chairs perfect for every home decor.',
		care_and_maintenance:
			'Spot clean fabric, avoid water contact on wooden parts.',
		seller_details:
			'Furnicap Innovatives - Known for quality dining solutions.',
		QA: 'Is this chair suitable for all weather? - Indoor use is recommended for longevity.',
	},
	{
		image_name: 'DinningTable-4Furnicap.webp',
		product_name: 'Dining Table Model 4',
		price: '14999',
		category: 'Dining Tables',
		dimensions: '160cm x 90cm x 75cm',
		weight: '22kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required',
		primary_material: 'Solid Wood with Natural Finish',
		disclaimers: 'Wood grain may vary across each piece.',
		brand_and_collection_overview:
			'Furnicap Innovatives brings a rustic touch with this solid wood dining table designed for family gatherings.',
		care_and_maintenance: 'Use wood-friendly cleaner, avoid water spills.',
		seller_details:
			'Furnicap Innovatives - Leader in home furniture solutions.',
		QA: 'How many chairs fit this table? - It comfortably fits six chairs.',
	},
	{
		image_name: 'ErgonomicChair-3Furnicap.webp',
		product_name: 'Ergonomic Chair Model 3',
		price: '7499',
		category: 'Ergonomic Chairs',
		dimensions: '52cm x 52cm x 110cm',
		weight: '6.8kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Easy assembly required',
		primary_material: 'Mesh Backrest and Metal Frame',
		disclaimers: 'Assembly instructions included.',
		brand_and_collection_overview:
			'Designed for comfort, this ergonomic chair by Furnicap Innovatives is ideal for long work hours.',
		care_and_maintenance: 'Dust regularly with a soft cloth.',
		seller_details:
			'Furnicap Innovatives - Trusted brand in ergonomic furniture.',
		QA: 'Does this chair recline? - Yes, it has an adjustable recline function.',
	},
	{
		image_name: 'ExecutiveChair-2Furnicap.webp',
		product_name: 'Executive Chair Model 2',
		price: '9599',
		category: 'Executive Chairs',
		dimensions: '55cm x 55cm x 120cm',
		weight: '7.2kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Basic assembly required',
		primary_material: 'Faux Leather and Steel Frame',
		disclaimers: 'Leather texture may slightly differ.',
		brand_and_collection_overview:
			'Luxurious and supportive, Furnicap Innovatives’ executive chairs are perfect for top-tier offices.',
		care_and_maintenance: 'Clean with a damp cloth, avoid harsh chemicals.',
		seller_details:
			'Furnicap Innovatives - Reliable provider of executive office furniture.',
		QA: 'Is it height-adjustable? - Yes, with a pneumatic lift feature.',
	},
	{
		image_name: 'ExecutiveChair-3Furnicap.webp',
		product_name: 'Executive Chair Model 3',
		price: '10299',
		category: 'Executive Chairs',
		dimensions: '56cm x 56cm x 125cm',
		weight: '7.5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Minimal assembly required',
		primary_material: 'Genuine Leather and Aluminum Frame',
		disclaimers: 'Color may differ slightly from images.',
		brand_and_collection_overview:
			'Furnicap Innovatives executive chairs offer superior comfort and style for corporate settings.',
		care_and_maintenance: 'Use leather-friendly cleaning agents only.',
		seller_details:
			'Furnicap Innovatives - Over 20 years of quality office furniture expertise.',
		QA: 'Is the chair suitable for tall individuals? - Yes, it has an adjustable backrest.',
	},
	{
		image_name: 'StudyTable-2Furnicap.webp',
		product_name: 'Study Table Model 2',
		price: '5699',
		category: 'Study Tables',
		dimensions: '120cm x 60cm x 75cm',
		weight: '14kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'Engineered Wood with Laminate Finish',
		disclaimers: 'Surface may have minor color variations.',
		brand_and_collection_overview:
			'Stylish and functional, this study table by Furnicap Innovatives fits seamlessly in any study area.',
		care_and_maintenance:
			'Wipe clean with a damp cloth, avoid abrasive cleaners.',
		seller_details:
			'Furnicap Innovatives - Premium provider of study solutions for students and professionals alike.',
		QA: 'Does it come with drawers? - No, this model is a minimalist open table.',
	},
	{
		image_name: 'StaffLockers-2Furnicap.jpg',
		product_name: 'Staff Locker Model 2',
		price: '7499',
		category: 'Storage Lockers',
		dimensions: '90cm x 45cm x 180cm',
		weight: '26kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Powder-Coated Metal',
		disclaimers: 'Color may vary slightly depending on stock availability.',
		brand_and_collection_overview:
			'Secure and functional, Furnicap Innovatives’ staff lockers are ideal for employee storage needs.',
		care_and_maintenance:
			'Clean with a soft, damp cloth and avoid scratches.',
		seller_details:
			'Furnicap Innovatives - Trusted brand in durable storage solutions.',
		QA: 'Does it have locks for each compartment? - Yes, each locker comes with individual locks.',
	},
	{
		image_name: 'WorkStation-4Furnicap.webp',
		product_name: 'Workstation Desk Model 4',
		price: '12999',
		category: 'Workstation Desks',
		dimensions: '150cm x 80cm x 75cm',
		weight: '18kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'Engineered Wood and Metal Legs',
		disclaimers: 'Product colors may vary due to lighting.',
		brand_and_collection_overview:
			'Enhance productivity with Furnicap Innovatives’ modern workstations designed for corporate use.',
		care_and_maintenance:
			'Wipe with a damp cloth; avoid harsh cleaning agents.',
		seller_details:
			'Furnicap Innovatives - India’s trusted provider of high-quality office furniture.',
		QA: 'Is this desk stable for computer equipment? - Yes, it’s built for stable, heavy-duty use.',
	},
	{
		image_name: 'ClassChair-2Furnicap.jpeg',
		product_name: 'Class Chair Model 2',
		price: '4799',
		category: 'Class Chairs',
		dimensions: '45cm x 50cm x 85cm',
		weight: '5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Polypropylene and Metal',
		disclaimers: 'Product colors may vary due to lighting.',
		brand_and_collection_overview:
			'Furnicap Innovatives offers ergonomic chairs crafted to enhance comfort in educational and corporate settings.',
		care_and_maintenance:
			'Wipe clean with a damp cloth. Avoid harsh cleaning agents.',
		seller_details:
			'Furnicap Innovatives - Delivering quality seating solutions with over two decades of experience.',
		QA: 'Is this chair stackable? - Yes, the chair is designed for easy stacking and storage.',
	},
	{
		image_name: 'ClassChair-3Furnicap.jpeg',
		product_name: 'Class Chair Model 3',
		price: '4899',
		category: 'Class Chairs',
		dimensions: '45cm x 50cm x 85cm',
		weight: '5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Polypropylene and Metal',
		disclaimers: 'Product colors and texture may vary slightly.',
		brand_and_collection_overview:
			'Furnicap Innovatives provides versatile seating options suitable for classrooms, conference halls, and waiting areas.',
		care_and_maintenance:
			'Dust with a dry cloth regularly. Avoid direct exposure to sunlight.',
		seller_details:
			'Furnicap Innovatives - Established brand offering reliable and comfortable seating solutions.',
		QA: 'Can this chair be used outdoors? - While it’s durable, we recommend indoor use for longer lifespan.',
	},
	{
		image_name: 'ConferenceTable-2Furnicap.webp',
		product_name: 'Conference Table Model 2',
		price: '16999',
		category: 'Conference Tables',
		dimensions: '200cm x 90cm x 75cm',
		weight: '32kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'High-Density Particle Board with Veneer Finish',
		disclaimers: 'Wood finish may slightly vary across batches.',
		brand_and_collection_overview:
			'Enhance productivity and style in your meeting spaces with Furnicap Innovatives conference tables.',
		care_and_maintenance:
			'Clean with a damp cloth, avoid placing hot objects directly on the surface.',
		seller_details:
			'Furnicap Innovatives - Kolkata-based trusted supplier of functional and stylish office furniture.',
		QA: 'Does this table come with cable management? - Yes, integrated cable management is included.',
	},
	{
		image_name: 'DinningChair-2Furnicap.webp',
		product_name: 'Dining Chair Model 2',
		price: '3299',
		category: 'Dining Chairs',
		dimensions: '42cm x 45cm x 85cm',
		weight: '4.5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Solid Wood with Fabric Upholstery',
		disclaimers: 'Fabric and wood grain may vary slightly.',
		brand_and_collection_overview:
			'Furnicap Innovatives brings elegance and comfort to dining rooms with this collection of stylish chairs.',
		care_and_maintenance:
			'Dust fabric upholstery regularly and avoid moisture.',
		seller_details:
			'Furnicap Innovatives - Leading brand offering comfortable and stylish dining solutions.',
		QA: 'Is the fabric stain-resistant? - Yes, it includes a stain-resistant coating for easy cleaning.',
	},
	{
		image_name: 'DinningTable-3Furnicap.webp',
		product_name: 'Dining Table Model 3',
		price: '13999',
		category: 'Dining Tables',
		dimensions: '150cm x 90cm x 75cm',
		weight: '20kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required',
		primary_material: 'Engineered Wood with Veneer Finish',
		disclaimers: 'Wood color may vary slightly.',
		brand_and_collection_overview:
			'Stylish and sturdy, this dining table from Furnicap Innovatives is designed to complement any modern dining space.',
		care_and_maintenance:
			'Wipe with a damp cloth. Avoid water and direct sunlight.',
		seller_details:
			'Furnicap Innovatives - Trusted brand in India providing stylish dining furniture.',
		QA: 'How many people can comfortably sit at this table? - It seats six people comfortably.',
	},
	{
		image_name: 'ErgonomicChair-2Furnicap.webp',
		product_name: 'Ergonomic Chair Model 2',
		price: '7299',
		category: 'Ergonomic Chairs',
		dimensions: '50cm x 50cm x 110cm',
		weight: '6.5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Simple assembly required',
		primary_material: 'Mesh Fabric and Metal Frame',
		disclaimers: 'Minor assembly required, tools provided.',
		brand_and_collection_overview:
			'Maximize comfort and productivity with Furnicap Innovatives ergonomic chairs, designed for long hours of use.',
		care_and_maintenance:
			'Dust with a soft cloth. Avoid direct sunlight exposure.',
		seller_details:
			'Furnicap Innovatives - Known for quality ergonomic office furniture across India.',
		QA: 'Does the chair have lumbar support? - Yes, it is designed with ergonomic lumbar support.',
	},
	{
		image_name: 'OutdoorSofa-3Furnicap.webp',
		product_name: 'Outdoor Sofa Model 3',
		price: '13999',
		category: 'Outdoor Sofas',
		dimensions: '150cm x 85cm x 80cm',
		weight: '22kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Basic assembly required',
		primary_material: 'Synthetic Rattan and Metal Frame',
		disclaimers:
			'Color and texture may vary slightly due to natural material use.',
		brand_and_collection_overview:
			'Furnicap Innovatives offers weather-resistant outdoor sofas that combine comfort and style for any patio or garden space.',
		care_and_maintenance:
			'Use a soft brush for cleaning. Cover when not in use to protect from harsh weather.',
		seller_details:
			'Furnicap Innovatives - Renowned for high-quality, weather-resistant outdoor furniture.',
		QA: 'Is this suitable for a seaside location? - Yes, but we recommend regular cleaning to prevent salt build-up.',
	},
	{
		image_name: 'SlottedAngleRack-1Furnicap.webp',
		product_name: 'Slotted Angle Rack Model 1',
		price: '5999',
		category: 'Storage Racks',
		dimensions: '100cm x 40cm x 180cm',
		weight: '18kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required, tools provided',
		primary_material: 'Powder-coated Steel',
		disclaimers: 'Assembly required; follow instructions carefully.',
		brand_and_collection_overview:
			'Durable and practical, Furnicap Innovatives’ slotted angle racks offer efficient storage solutions for warehouses, garages, and offices.',
		care_and_maintenance:
			'Wipe with a dry cloth; avoid exposure to moisture.',
		seller_details:
			'Furnicap Innovatives - Trusted name in storage solutions with a reputation for durability and reliability.',
		QA: 'Can the shelves hold heavy loads? - Yes, each shelf can support up to 100 kg.',
	},
	{
		image_name: 'WorkStation-5Furnicap.webp',
		product_name: 'Workstation Desk Model 5',
		price: '13499',
		category: 'Workstation Desks',
		dimensions: '160cm x 80cm x 75cm',
		weight: '20kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly required',
		primary_material: 'Laminate Wood and Metal Frame',
		disclaimers: 'Surface texture may vary due to manufacturing.',
		brand_and_collection_overview:
			'This modern workstation desk from Furnicap Innovatives is designed to enhance office productivity with a sleek and functional workspace.',
		care_and_maintenance:
			'Wipe down with a soft cloth and mild cleaning solution as needed.',
		seller_details:
			'Furnicap Innovatives - Leading provider of modern office furniture with a commitment to quality.',
		QA: 'Does this model come with built-in storage? - No, this model is storage-free for a minimalist design.',
	},
	{
		image_name: 'ErgonomicChair-1Furnicap.jpeg',
		product_name: 'Ergonomic Chair Model 1',
		price: '6999',
		category: 'Ergonomic Chairs',
		dimensions: '55cm x 50cm x 110cm',
		weight: '7kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Simple assembly required',
		primary_material: 'Breathable Mesh and Metal Frame',
		disclaimers:
			'Assembly instructions provided, minor differences in color due to lighting.',
		brand_and_collection_overview:
			'Furnicap Innovatives’ ergonomic chairs are designed to provide ultimate support and comfort, enhancing productivity in any workspace.',
		care_and_maintenance:
			'Clean with a soft, damp cloth. Avoid using strong chemicals.',
		seller_details:
			'Furnicap Innovatives - Known for quality and ergonomic design across India’s top workplaces.',
		QA: 'Does this chair have adjustable armrests? - Yes, the armrests are fully adjustable for custom comfort.',
	},
	{
		image_name: 'ExecutiveChair-1Furnicap.webp',
		product_name: 'Executive Chair Model 1',
		price: '9999',
		category: 'Executive Chairs',
		dimensions: '60cm x 55cm x 120cm',
		weight: '10kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Minor assembly required',
		primary_material: 'High-quality Leatherette and Metal Base',
		disclaimers: 'Color and finish may vary slightly from photos.',
		brand_and_collection_overview:
			'Furnicap Innovatives’ executive chairs combine luxurious comfort with a professional look, ideal for managers and executives.',
		care_and_maintenance:
			'Wipe leatherette with a damp cloth, avoid direct sunlight exposure to prevent fading.',
		seller_details:
			'Furnicap Innovatives - Trusted office furniture brand specializing in ergonomic and stylish seating solutions.',
		QA: 'What is the weight capacity of this chair? - It can hold up to 150 kg.',
	},
	{
		image_name: 'MultipurposeCabinet-1Furnicap.webp',
		product_name: 'Multipurpose Cabinet Model 1',
		price: '4999',
		category: 'Multipurpose Cabinets',
		dimensions: '80cm x 40cm x 180cm',
		weight: '25kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required',
		primary_material: 'Engineered Wood with Laminate Finish',
		disclaimers:
			'Assembly required, follow the provided guide for best results.',
		brand_and_collection_overview:
			'Furnicap Innovatives’ storage solutions include versatile cabinets designed for both functionality and style in any room.',
		care_and_maintenance:
			'Dust regularly and clean with a damp cloth. Avoid using abrasive materials.',
		seller_details:
			'Furnicap Innovatives - Leading furniture provider in Kolkata with a specialization in storage solutions.',
		QA: 'Is this cabinet lockable? - No, this model does not include a lock.',
	},
	{
		image_name: 'Sofa-1Furnicap.jpg',
		product_name: 'Living Room Sofa Model 1',
		price: '19999',
		category: 'Living Room Furniture',
		dimensions: '200cm x 85cm x 90cm',
		weight: '35kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Fully Assembled',
		primary_material: 'Fabric Upholstery with Solid Wood Frame',
		disclaimers: 'Fabric colors may vary slightly based on lighting.',
		brand_and_collection_overview:
			'Comfortable and modern, this Furnicap Innovatives sofa is perfect for adding warmth and style to living spaces.',
		care_and_maintenance:
			'Vacuum regularly to remove dust, spot clean with fabric-safe cleaner as needed.',
		seller_details:
			'Furnicap Innovatives - Offering premium, stylish, and comfortable sofas crafted to elevate any home interior.',
		QA: 'Can the fabric covers be removed for washing? - No, the covers are not removable.',
	},
	{
		image_name: 'StaffLockers-1Furnicap.webp',
		product_name: 'Staff Locker Model 1',
		price: '3999',
		category: 'Office Storage',
		dimensions: '45cm x 45cm x 180cm',
		weight: '20kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Powder-Coated Metal',
		disclaimers: 'Product appearance may slightly vary due to lighting.',
		brand_and_collection_overview:
			'Furnicap Innovatives’ staff lockers provide a secure, durable storage solution for any office space.',
		care_and_maintenance:
			'Wipe clean with a damp cloth, avoid using harsh chemicals.',
		seller_details:
			'Furnicap Innovatives - Specialist in office and storage furniture, offering robust solutions for workplace organization.',
		QA: 'How many compartments does this locker have? - This locker includes four separate compartments with individual locks.',
	},
	{
		image_name: 'WorkStation-1Furnicap.webp',
		product_name: 'Workstation Desk Model 1',
		price: '12999',
		category: 'Workstation Desks',
		dimensions: '150cm x 75cm x 75cm',
		weight: '18kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required, tools included',
		primary_material: 'Engineered Wood with Metal Frame',
		disclaimers:
			'Assembly required, ensure all components are secured properly.',
		brand_and_collection_overview:
			'Designed for productivity, Furnicap Innovatives workstations are built to last and offer maximum functionality in compact spaces.',
		care_and_maintenance:
			'Clean with a soft cloth and mild soap as needed. Avoid direct sunlight exposure.',
		seller_details:
			'Furnicap Innovatives - Quality office furniture suppliers focusing on ergonomic and space-saving designs.',
		QA: 'Does this desk have any cable management features? - Yes, there is an integrated cable management solution for a clean setup.',
	},
	{
		image_name: 'ClassChair-1Furnicap.jpeg',
		product_name: 'Class Chair Model 1',
		price: '4999',
		category: 'Class Chairs',
		dimensions: '45cm x 50cm x 85cm',
		weight: '5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'High-Density Polypropylene',
		disclaimers:
			'Product colors may vary slightly due to photographic lighting.',
		brand_and_collection_overview:
			'Furnicap Innovatives offers stylish and durable seating solutions perfect for classrooms, meeting rooms, and general seating purposes.',
		care_and_maintenance:
			'Wipe with a soft, dry cloth. Avoid using harsh chemicals or abrasives.',
		seller_details:
			'Furnicap Innovatives - Trusted furniture manufacturers with 20+ years in the industry, based in Kolkata.',
		QA: 'Does this chair require any assembly? - No, the chair is pre-assembled and ready for use.',
	},
	{
		image_name: 'ConferenceTable-1Furnicap.webp',
		product_name: 'Conference Table Model 1',
		price: '15999',
		category: 'Conference Tables',
		dimensions: '180cm x 90cm x 75cm',
		weight: '30kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Basic Assembly Required',
		primary_material: 'Engineered Wood',
		disclaimers: 'Wood textures may differ slightly across batches.',
		brand_and_collection_overview:
			'Furnicap Innovatives delivers top-notch furniture that enhances productivity and style in every meeting space.',
		care_and_maintenance:
			'Dust regularly with a soft cloth. Clean with a damp cloth as needed, and avoid direct sunlight exposure.',
		seller_details:
			'Furnicap Innovatives - Reliable furniture suppliers in Kolkata with ergonomic and innovative designs.',
		QA: 'Is this conference table customizable in size? - Yes, we offer custom sizes upon request.',
	},
	{
		image_name: 'DinningChair-1Furnicap.webp',
		product_name: 'Dining Chair Model 1',
		price: '2999',
		category: 'Dining Chairs',
		dimensions: '40cm x 45cm x 85cm',
		weight: '4kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Solid Wood',
		disclaimers:
			'Wood grain may vary due to natural variations in the material.',
		brand_and_collection_overview:
			'Stylish and ergonomic dining solutions from Furnicap Innovatives designed to enhance comfort and aesthetics.',
		care_and_maintenance:
			'Dust frequently with a dry cloth. Avoid water exposure.',
		seller_details:
			'Furnicap Innovatives - Over two decades of expertise in crafting quality furniture solutions.',
		QA: 'What is the maximum weight this chair can support? - The chair can support up to 120 kg.',
	},
	{
		image_name: 'OutdoorSofa-1Furnicap.webp',
		product_name: 'Outdoor Sofa Model 1',
		price: '12999',
		category: 'Outdoor Sofas',
		dimensions: '150cm x 80cm x 85cm',
		weight: '25kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Basic Assembly Required',
		primary_material: 'Weather-resistant Rattan',
		disclaimers:
			'Color and texture may vary slightly due to natural materials.',
		brand_and_collection_overview:
			'Outdoor furniture collection by Furnicap Innovatives, designed for durability and comfort in open spaces.',
		care_and_maintenance:
			'Cover when not in use. Clean with a soft cloth and mild soap solution.',
		seller_details:
			'Furnicap Innovatives - Leading provider of quality furniture with a reputation for durability and style.',
		QA: 'Can this sofa withstand heavy rain? - Yes, the material is weather-resistant, but a cover is recommended for extended protection.',
	},
	{
		image_name: 'StudyTable-1Furnicap.jpeg',
		product_name: 'Study Table Model 1',
		price: '7499',
		category: 'Study Tables',
		dimensions: '120cm x 60cm x 75cm',
		weight: '15kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required, tools provided',
		primary_material: 'Engineered Wood with Laminate Finish',
		disclaimers: 'Assembly time may vary based on individual skill level.',
		brand_and_collection_overview:
			'Furnicap Innovatives’ study tables are crafted to boost productivity and provide ergonomic support for students and professionals alike.',
		care_and_maintenance:
			'Wipe clean with a damp cloth. Avoid exposure to high moisture levels.',
		seller_details:
			'Furnicap Innovatives - High-quality furniture manufacturer, serving homes and offices across India.',
		QA: 'Does this table include storage? - No, this model does not include drawers or shelves.',
	},
	{
		image_name: 'ConferenceTable-5Furnicap.webp',
		product_name: 'Conference Table Model 5',
		price: '19499',
		category: 'Conference Tables',
		dimensions: '250cm x 110cm x 75cm',
		weight: '40kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'Engineered Wood with High-Gloss Finish',
		disclaimers: 'Finish may vary due to lighting.',
		brand_and_collection_overview:
			'Designed for elegance and functionality, Furnicap Innovatives conference tables elevate any professional setting.',
		care_and_maintenance:
			'Clean with a dry cloth, avoid exposure to direct sunlight.',
		seller_details:
			'Furnicap Innovatives - Premier choice for conference solutions in India.',
		QA: 'Does this model have cable management? - Yes, it includes a built-in cable tray.',
	},
	/* {
		image_name: 'DinningChair-1Furnicap.webp',
		product_name: 'Dining Chair Model 1',
		price: '2899',
		category: 'Dining Chairs',
		dimensions: '45cm x 45cm x 90cm',
		weight: '5kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Solid Wood with Cushioned Seat',
		disclaimers: 'Slight color variation may occur.',
		brand_and_collection_overview:
			'Comfortable and stylish, Furnicap Innovatives’ dining chairs suit any modern dining room.',
		care_and_maintenance:
			'Spot clean upholstery, avoid water on wooden parts.',
		seller_details:
			'Furnicap Innovatives - Quality dining furniture for Indian homes.',
		QA: 'Is the cushion removable? - No, the cushion is attached for durability.',
	}, */
	/* {
		image_name: 'DinningChair-2Furnicap.webp',
		product_name: 'Dining Chair Model 2',
		price: '3199',
		category: 'Dining Chairs',
		dimensions: '44cm x 46cm x 88cm',
		weight: '5.2kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Pre-Assembled',
		primary_material: 'Metal Frame with Faux Leather',
		disclaimers: 'Color may vary due to screen settings.',
		brand_and_collection_overview:
			'Elegant and functional, Furnicap Innovatives brings versatile seating for any dining setup.',
		care_and_maintenance: 'Wipe leather gently with a damp cloth.',
		seller_details:
			'Furnicap Innovatives - Specialists in affordable dining solutions.',
		QA: 'Is the faux leather durable? - Yes, it is designed for daily use.',
	}, */
	{
		image_name: 'DinningTable-1Furnicap.webp',
		product_name: 'Dining Table Model 1',
		price: '13999',
		category: 'Dining Tables',
		dimensions: '150cm x 90cm x 75cm',
		weight: '24kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required',
		primary_material: 'Engineered Wood with Glossy Finish',
		disclaimers: 'Product may have slight texture variations.',
		brand_and_collection_overview:
			'With a modern design, this table from Furnicap Innovatives is crafted for sophisticated dining areas.',
		care_and_maintenance:
			'Avoid contact with water; clean with a soft cloth.',
		seller_details:
			'Furnicap Innovatives - Over 20 years of excellence in home furnishings.',
		QA: 'Does this table scratch easily? - It is coated for scratch resistance.',
	},
	{
		image_name: 'DinningTable-2Furnicap.webp',
		product_name: 'Dining Table Model 2',
		price: '14499',
		category: 'Dining Tables',
		dimensions: '160cm x 90cm x 75cm',
		weight: '25kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required',
		primary_material: 'Solid Oak with Matte Finish',
		disclaimers: 'Color and grain may vary slightly.',
		brand_and_collection_overview:
			'This solid oak dining table by Furnicap Innovatives is perfect for traditional or contemporary homes.',
		care_and_maintenance: 'Dust regularly, avoid water exposure.',
		seller_details:
			'Furnicap Innovatives - Trusted for quality wood furniture.',
		QA: 'Can it fit six chairs? - Yes, it comfortably seats six.',
	},
	{
		image_name: 'Sofa-2Furnicap.webp',
		product_name: 'Modern Sofa Model 2',
		price: '25999',
		category: 'Sofas',
		dimensions: '180cm x 90cm x 85cm',
		weight: '32kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Minimal assembly required',
		primary_material: 'High-Density Foam with Fabric Upholstery',
		disclaimers: 'Color may vary based on viewing device.',
		brand_and_collection_overview:
			'Furnicap Innovatives’ modern sofas bring elegance and comfort to any living space.',
		care_and_maintenance: 'Vacuum fabric regularly to maintain freshness.',
		seller_details:
			'Furnicap Innovatives - Pioneers in comfortable seating solutions.',
		QA: 'Is the cover removable? - No, it is fixed for a sleek look.',
	},
	{
		image_name: 'OutdoorSofa-6Furnicap.webp',
		product_name: 'Outdoor Sofa Model 6',
		price: '20999',
		category: 'Outdoor Sofas',
		dimensions: '190cm x 80cm x 85cm',
		weight: '27kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'All-weather Rattan and Water-resistant Fabric',
		disclaimers: 'Color and texture may vary slightly.',
		brand_and_collection_overview:
			'Furnicap Innovatives’ outdoor sofas are built for durability and comfort, even in changing weather.',
		care_and_maintenance:
			'Wipe clean with a damp cloth and protect from rain for longevity.',
		seller_details:
			'Furnicap Innovatives - Experts in quality outdoor furniture.',
		QA: 'Is it fade-resistant? - Yes, it’s made with UV-resistant fabric.',
	},
	{
		image_name: 'WorkStation-3Furnicap.webp',
		product_name: 'Workstation Desk Model 3',
		price: '11599',
		category: 'Workstation Desks',
		dimensions: '140cm x 70cm x 75cm',
		weight: '17kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Self-assembly required',
		primary_material: 'MDF with Powder-coated Metal Legs',
		disclaimers: 'Slight differences in color may occur due to lighting.',
		brand_and_collection_overview:
			'Perfect for open office setups, this workstation by Furnicap Innovatives is both functional and stylish.',
		care_and_maintenance:
			'Wipe with a soft cloth; avoid abrasive cleaners.',
		seller_details:
			'Furnicap Innovatives - Leading provider of workspace solutions.',
		QA: 'Is this desk scratch-resistant? - Yes, it has a scratch-resistant coating.',
	},
	/* {
		image_name: 'WorkStation-4Furnicap.webp',
		product_name: 'Workstation Desk Model 4',
		price: '12499',
		category: 'Office Desks',
		dimensions: '150cm x 80cm x 75cm',
		weight: '18kg',
		brand: 'Furnicap Innovatives',
		assembly: 'Assembly Required',
		primary_material: 'Engineered Wood and Metal Legs',
		disclaimers: 'Product colors may vary due to lighting.',
		brand_and_collection_overview:
			'Enhance productivity with Furnicap Innovatives’ modern workstations designed for corporate use.',
		care_and_maintenance:
			'Wipe with a damp cloth; avoid harsh cleaning agents.',
		seller_details:
			'Furnicap Innovatives - India’s trusted provider of high-quality office furniture.',
		QA: 'Is this desk stable for computer equipment? - Yes, it’s built for stable, heavy-duty use.',
	}, */
];

export default PRODUCTS;
