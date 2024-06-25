-- Function to calculate the total price for a given order
CREATE OR REPLACE FUNCTION total_order_price(order_id_input INTEGER)
RETURNS NUMERIC AS $$
DECLARE
    total_price NUMERIC := 0;
BEGIN
    SELECT SUM(i.price * oi.quantity)
    INTO total_price
    FROM order_items oi
    JOIN items i ON oi.item_id = i.item_id
    WHERE oi.order_id = order_id_input;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

-- Function to calculate the total price for a given order of a given user
CREATE OR REPLACE FUNCTION total_order_price_for_user(order_id_input INTEGER, user_id_input INTEGER)
RETURNS NUMERIC AS $$
DECLARE
    total_price NUMERIC := 0;
BEGIN
    SELECT SUM(i.price * oi.quantity)
    INTO total_price
    FROM order_items oi
    JOIN items i ON oi.item_id = i.item_id
    JOIN product_orders po ON oi.order_id = po.order_id
    WHERE oi.order_id = order_id_input AND po.user_id = user_id_input;
    
    RETURN total_price;
END;
$$ LANGUAGE plpgsql;


