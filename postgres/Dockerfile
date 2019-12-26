FROM postgres:11.6

USER postgres
COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
# RUN chown -R root:root /var/lib/postgresql
# RUN chmod 755 /var/lib/postgresql
# RUN usermod -aG postgres $USER
