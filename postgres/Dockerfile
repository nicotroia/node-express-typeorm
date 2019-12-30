FROM postgres:11.6

USER root
COPY --chown=root:root docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
RUN chown -R root:root /var/lib/postgresql
RUN chmod -R 755 /var/lib/postgresql
RUN usermod -aG postgres root
# RUN chmod 755 /var/lib/postgresql/data
