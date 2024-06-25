SELECT first_name, last_name
FROM customers
ORDER BY last_name DESC, first_name DESC
LIMIT 2;

DELETE FROM purchases
WHERE customer_id = (SELECT customer_id FROM customers WHERE first_name = 'Scott');

DELETE FROM purchases
WHERE customer_id = (SELECT customer_id FROM customers WHERE first_name = 'Scott');

SELECT * FROM customers WHERE first_name = 'Scott';

SELECT p.id, '', '', i.item_name, p.quantity_purchased
FROM purchases p
LEFT JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id;

SELECT p.id, c.first_name, c.last_name, i.item_name, p.quantity_purchased
FROM purchases p
INNER JOIN customers c ON p.customer_id = c.customer_id
JOIN items i ON p.item_id = i.item_id
WHERE c.first_name != 'Scott';
