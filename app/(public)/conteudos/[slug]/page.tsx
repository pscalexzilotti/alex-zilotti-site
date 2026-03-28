import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, Post } from '@/lib/posts';
import { Section } from '@/components/shared/section';
import Link from 'next/link';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post: Post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post não encontrado' };
  return {
    title: `${post.title} | Alex Zilotti`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <main>
      <Section className="bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link href="/conteudos" className="hover:text-white transition-colors">
              ← Voltar para Conteúdos
            </Link>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <span>{new Date(post!.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            {post!.category && (
              <>
                <span>•</span>
                <span className="bg-slate-700 px-2 py-0.5 rounded">{post!.category}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">{post!.title}</h1>
          {post!.excerpt && (
            <p className="text-xl text-slate-300 mt-4">{post!.excerpt}</p>
          )}
        </div>
      </Section>

      <Section>
        <article className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <div dangerouslySetInnerHTML={{ __html: post!.contentHtml || '' }} />
        </article>
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-200">
          <Link
            href="/conteudos"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Ver todos os conteúdos
          </Link>
        </div>
      </Section>
    </main>
  );
}
