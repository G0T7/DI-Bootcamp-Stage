
select * from purchases;

-- Insert purchases for the customers using subqueries
INSERT INTO purchases (customer_id, item_id, quantity_purchased)
SELECT 
    c.customer_id,
    i.item_id, -- Corrected to use item_id from items table
    CASE 
        WHEN c.first_name = 'Scott' AND c.last_name = 'Scott' THEN 1
        WHEN c.first_name = 'Melanie' AND c.last_name = 'Johnson' THEN 10
        WHEN c.first_name = 'Greg' AND c.last_name = 'Jones' THEN 2
        ELSE NULL -- Add default value or handle other cases accordingly
    END AS quantity_purchased
FROM 
    customers c
JOIN 
    items i ON 
    CASE 
        WHEN c.first_name = 'Scott' AND c.last_name = 'Scott' THEN i.item_name = 'Fan'
        WHEN c.first_name = 'Melanie' AND c.last_name = 'Johnson' THEN i.item_name = 'Large Desk'
        WHEN c.first_name = 'Greg' AND c.last_name = 'Jones' THEN i.item_name = 'Small Desk'
        ELSE FALSE -- Add default value or handle other cases accordingly
    END;
	
	SELECT * FROM purchases;
	
	SELECT p.id, c.first_name, c.last_name, i.item_name, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id;

SELECT p.id, c.first_name, c.last_name, i.item_name, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id
WHERE p.customer_id = 5;

SELECT p.id, c.first_name, c.last_name, i.item_name, p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id
WHERE i.item_name IN ('Large Desk', 'Small Desk');

SELECT DISTINCT c.first_name, c.last_name
FROM customers c
JOIN purchases p ON c.customer_id = p.customer_id;


