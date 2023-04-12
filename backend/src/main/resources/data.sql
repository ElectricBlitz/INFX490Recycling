INSERT INTO location (name, address, phonenumber, latitude, longitude, types) VALUES 
('Home Depot', '1700 NE Evangeline Throughway, Lafayette, LA 70501', '337-289-1394', 30.245790, -92.010500, 'Electronic, Automotive'),
('Louisiana Scrap Metal Recycling', '2200 Cameron Street, Lafayette, LA 70506', '337-233-0112', 30.233400, -92.042080, 'Metal'),
('Target', '3225 Louisiana Avenue, Lafayette, LA 70501', '337-769-7515', 30.265650, -91.996590, 'Electronic, Plastic'),
('Lowes', '120 E Gloria Switch Rd, Lafayette, LA 70507', '337-291-2601', 30.294280, -92.021330, 'Electronic, Plastic'),
('Home Depot', '3721 Ambassador Caffery Pkwy, Lafayette, LA 70503', '337-989-0911', 30.1735294, -92.0667041, 'Electronic, Automotive'),
('Target', '4313 Ambassador Caffery Pkwy, Lafayette, LA 70508', '337-406-2536', 30.1606098, -92.0489807, 'Electronic, Plastic'),
('Lowes', '3726 Ambassador Caffery Pkwy, Lafayette, LA 70503', '337-981-3434', 30.1701409, -92.0687474, 'Electronic, Plastic'),
('Best Buy', '5635 Johnston Street, Lafayette, LA 70503', '337-216-0501', 30.1757295, -92.0746298, 'Electronic'),
('Auto Zone', '301 E. Third Street, Lafayette, LA 70501', '337-234-5271', 30.2299083, -92.012818, 'Automotive'),
('Advance Auto Parts', '1114 SE Evangeline Throughway, Lafayette, LA 70501', '337-593-9054', 30.2201905, -92.0074572, 'Automotive'),
('OReilly Auto Parts', '2027 Moss Street, Lafayette, LA 70501', '337-234-6374', 30.2519318, -92.0058949, 'Automotive'),
('Advance Auto Parts', '1601 Cameron Street, Lafayette, LA 70506', '337-593-0944', 30.2319877, -92.0330348, 'Automotive'),
('OReilly Auto Parts', '1010 N University Avenue, Lafayette, LA 70506', '337-237-6014', 30.2422775, -92.0319537, 'Automotive'),
('Firestone Complete Auto Care', '1200 Pinhook Road, Lafayette, LA 70503', '337-261-0090', 30.2027505, -92.0146137, 'Automotive'),
('Walmart Tire and Lube Express', '1229 NW Evangeline Throughway, Lafayette, LA 70501', '337-232-1677', 30.2398506, -92.01553, 'Automotive'),
('Auto Zone', '3805 N Moss Street, Lafayette, LA 70507', '337-261-9543', 30.2746864, -92.0085306, 'Automotive'),
('Advance Auto Parts', '3804 Moss Street, Lafayette, LA 70507', '337-593-8958', 30.2737302, -92.0075889, 'Automotive'),
('Auto Zone', '2304 W Pinhook Road, Lafayette, LA 70508', '337-232-9284', 30.1835513, -92.0087672, 'Automotive'),
('OReilly Auto Parts', '2313 W Pinhook Road, Lafayette, LA 70508', '337-264-0480', 30.1833537, -92.0069104, 'Automotive'),
('Walmart Tire and Lube Express', '2428 W Pinhook Road, Lafayette, LA 70508', '337-231-1852', 30.1781144, -92.0060902, 'Automotive'),
('Auto Zone', '4300 Johnston Street, Lafayette, LA 70503', '337-989-8903', 30.195204, -92.0581889, 'Automotive'),
('Firestone Complete Auto Care', '4505 Johnston Street, Lafayette, LA 70503', '337-984-0775', 30.1921761, -92.0573563, 'Automotive'),
('Auto Zone', '5412 Cameron Street, Lafayette, LA 70506', '337-234-0135', 30.2324245, -92.0860797, 'Automotive'),
('Advance Auto Parts', '3228 W Pinhook Road, Lafayette, LA 70508', '337-266-5378', 30.1655378, -91.9985915, 'Automotive'),
('OReilly Auto Parts', '4796 Johnston Street, Lafayette, LA 70503', '337-981-6014', 30.1859693, -92.0674841, 'Automotive'),
('Advance Auto Parts', '100 Inez Lane, Lafayette, LA 70506', '337-988-7647', 30.1861647, -92.0754864, 'Automotive'),
('Walmart Tire and Lube Express', '3142 Ambassador Caffery Pkwy, Lafayette, LA 70506', '337-989-4082', 30.1872187, -92.0785232, 'Automotive'),
('Firestone Complete Auto Care', '3812 Ambassador Caffery Pkwy, Lafayette, LA 70503', '337-981-3006', 30.1693837, -92.0648924, 'Automotive'),
('Pep Boys Auto', '5639 Johnston Street, Lafayette, LA 70503', '337-737-2697', 30.1754502, -92.0754228, 'Automotive'),
('Arabie Riverside Shell', '4403 Johnston Street, Lafayette, LA 70503', '337-984-9840', 30.1936648, -92.0580144, 'Automotive'),
('Stans Car Repair', '106 Camille Street, Lafayette, LA 70503', '337-988-3001', 30.2014291, -92.0511516, 'Automotive'),
('Fournets Winnwood Chevron', '2932 Johnston Street, Lafayette, LA 70503', '337-823-4256', 30.2051457, -92.0429941, 'Automotive'),
('Lafayette Parish Recycling Foundation Drop-Off Site', '107 L G Lane, Lafayette, LA, 70506', '337-234-0066', 30.2364579, -92.1781529, 'Plastic, Paper, Metal'),
('Albertsons', '2678 Johnston Street, Lafayette, LA 70503', '337-233-2940', 30.2087105, -92.0386436, 'Plastic'),
('Albertsons', '2863 Ambassador Caffery Pkwy, Lafayette, LA 70506', '337-406-8887', 30.1980949, -92.0738603, 'Plastic'),
('Albertsons', '4400 Ambassador Caffery Pkwy, Lafayete, LA 70506', '337-984-4587', 30.156803, -92.0512228, 'Plastic');
INSERT INTO Account (firstName, lastName, username, password, rewardsPoints) VALUES 
('Dylan','Bertrand','admin','password',100),
('Phillip','Guidry','admin2','password2',100),
('Ryne','Guercio','admin3','password3',100),
('Lauren','Coleman','admin4','password4',100),
('Gabe','Trahan','admin5','password5',100);
INSERT INTO Comments (username, comment, created) VALUES
('admin', 'This is a test', CURRENT_DATE)