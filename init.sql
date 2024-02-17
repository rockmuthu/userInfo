SELECT 'CREATE DATABASE testdoc'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'testdoc')
