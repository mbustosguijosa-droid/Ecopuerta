-- Ecopuerta Factory · contenido editable de la web
-- Pegar entero en Supabase → SQL Editor → New query → Run.

-- 1) Textos sueltos de la web (titular, subtítulo, cifras...)
create table if not exists public.contenido (
  clave       text primary key,
  valor       text not null,
  descripcion text
);

-- 2) Tarjetas de servicios
create table if not exists public.servicios (
  id             bigint generated always as identity primary key,
  orden          int     not null default 0,
  titulo         text    not null,
  texto          text    not null,
  etiquetas      text[]  not null default '{}',
  foto_url       text    not null,
  foto_hover_url text,
  activo         boolean not null default true
);

-- 3) Seguridad: la web (usuario anónimo) solo puede LEER.
--    Editar solo se puede desde el panel de Supabase con vuestra cuenta.
alter table public.contenido enable row level security;
alter table public.servicios enable row level security;

drop policy if exists "lectura publica" on public.contenido;
create policy "lectura publica" on public.contenido for select to anon using (true);

drop policy if exists "lectura publica" on public.servicios;
create policy "lectura publica" on public.servicios for select to anon using (activo);

-- 4) Contenido inicial (el que tiene la web ahora)
insert into public.contenido (clave, valor, descripcion) values
  ('etiqueta_superior', 'Más de 30 años de oficio en carpintería a medida', 'Texto junto a "Desde 2007"'),
  ('titular',           'Puertas hechas a mano para durar toda una vida',  'Titular grande de la portada'),
  ('titular_destacado', 'a mano',                                           'Palabras del titular en cursiva verde (deben aparecer en el titular)'),
  ('subtitulo',         'Somos un taller familiar de carpinteros e instaladores. Diseñamos, fabricamos y montamos puertas, armarios y vestidores a medida en madera, PVC y aluminio — con el cuidado de siempre y un acabado que se nota al tacto.', 'Párrafo bajo el titular'),
  ('cifra_1_valor',     '30+',                                              'Primera tarjeta: número'),
  ('cifra_1_texto',     'Años de experiencia en el oficio',                 'Primera tarjeta: texto'),
  ('cifra_2_valor',     '100%',                                             'Segunda tarjeta: número'),
  ('cifra_2_texto',     'Diseñado, fabricado e instalado a medida',         'Segunda tarjeta: texto'),
  ('materiales',        'Madera, PVC, Aluminio, Vidrio, Herrajes',          'Lista separada por comas'),
  ('contacto_texto',    'Cuéntanos tu proyecto y te preparamos un presupuesto sin compromiso. Te respondemos personalmente, como siempre.', 'Texto del bloque de contacto'),
  ('email',             'ecopuerta@me.com',                                 'Correo de contacto')
on conflict (clave) do nothing;

insert into public.servicios (orden, titulo, texto, etiquetas, foto_url, foto_hover_url)
select * from (values
  (1, 'Puertas a medida',
      'Diseñamos contigo cada puerta: modelo, acabado y herrajes. Lacadas, en madera o con fresados exclusivos, fabricadas a mano y ajustadas al milímetro.',
      array['Diseño propio','Lacadas','Madera','Fresados'], '/img/puertas-lacadas.webp', null),
  (2, 'Armarios y vestidores',
      'Armarios empotrados y vestidores pensados para tu espacio: interiores a medida, iluminación integrada y frentes que se funden con la casa.',
      array['Empotrados','Vestidores','Luz LED','Interiores'], '/img/vestidor.webp', '/img/armario-empotrado.webp'),
  (3, 'Entrada y seguridad',
      'Puertas de seguridad, acorazadas y cerramientos en PVC y aluminio. Montaje profesional, herrajes de calidad y barnizados que aguantan el paso del tiempo.',
      array['Acorazadas','Seguridad','PVC','Aluminio'], '/img/puerta-seguridad.webp', null)
) as v(orden, titulo, texto, etiquetas, foto_url, foto_hover_url)
where not exists (select 1 from public.servicios);

-- 5) Carpeta pública para subir fotos nuevas
insert into storage.buckets (id, name, public)
values ('fotos', 'fotos', true)
on conflict (id) do nothing;
