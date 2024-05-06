-- Update birth_dates for Lea Benichou and Marc Benichou
UPDATE students
SET birth_date = '1998-11-02'
WHERE first_name IN ('Lea', 'Marc') AND last_name = 'Benichou';

-- Change last_name of David from 'Grez' to 'Guez'
UPDATE students
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

-- Delete Lea Benichou from the table
DELETE FROM students
WHERE first_name = 'Lea' AND last_name = 'Benichou';

-- Count total students in the table
SELECT COUNT(*) AS total_students FROM students;

-- Count students born after 1/01/2000
SELECT COUNT(*) AS students_born_after_2000
FROM students
WHERE birth_date > '2000-01-01';

-- Add a column to the student table called math_grade
ALTER TABLE students ADD COLUMN math_grade INTEGER;

-- Add grades to students
UPDATE students SET math_grade = math_grade + 80 WHERE id = 1;
UPDATE students SET math_grade = math_grade + 90 WHERE id IN (2, 4);
UPDATE students SET math_grade = math_grade + 40 WHERE id = 6;

-- Count how many students have a grade bigger than 83
SELECT COUNT(*) AS students_with_grade_above_83
FROM students
WHERE math_grade > 83;

-- Add another Omer Simpson with a different grade
INSERT INTO students (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', '1980-10-03', 70);

SELECT first_name, last_name, COUNT(math_grade) AS total_grades
FROM students
GROUP BY first_name, last_name;

-- Find the sum of all students' grades
SELECT SUM(math_grade) AS total_grades_sum FROM students;


