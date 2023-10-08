FROM mysql:8.0

# Set environment variables
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword
ENV MYSQL_ROOT_PASSWORD=myrootpassword

# Copy SQL script to create table
COPY createtable.sql /docker-entrypoint-initdb.d/


# Expose the default MySQL port
EXPOSE 5000