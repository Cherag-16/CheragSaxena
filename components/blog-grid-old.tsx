"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Heart,
  MessageCircle,
  Share2,
  Copy,
  Share,
  X,
} from "lucide-react";

const blogPosts = [
  {
    title:
      "The Journey Begins: How I'm Building My Path in Full-Stack Web Development",
    excerpt:
      "I love building things that solve real problems. My journey in tech started with curiosity and led me to full-stack development. Here's how I got here and where I'm going.",
    image: "/placeholder.svg",
    category: "Career Tips",
    date: "2024-12-08",
    readTime: "15 min read",
    featured: true,
  },
  {
    title: "Building Scalable React Applications with Modern Hooks",
    excerpt:
      "Learn how to leverage React's latest hooks and patterns to build maintainable and scalable applications that can grow with your business needs.",
    image: "/react-hooks-blog.png",
    category: "React",
    date: "2024-12-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "Full Stack Development with MERN: A Complete Guide",
    excerpt:
      "A comprehensive guide to building full-stack applications using MongoDB, Express.js, React, and Node.js with real-world examples and best practices.",
    image: "/mern-stack-guide.png",
    category: "Web Development",
    date: "2024-12-10",
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "My Journey: From Student to Full Stack Developer",
    excerpt:
      "Sharing my personal journey, challenges faced, lessons learned, and tips for aspiring developers starting their career in tech.",
    image: "/developer-journey-blog.png",
    category: "Career Tips",
    date: "2024-12-05",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Mastering Node.js: Advanced Patterns and Best Practices",
    excerpt:
      "Deep dive into advanced Node.js concepts, design patterns, and best practices for building robust backend applications.",
    image: "/nodejs-advanced-blog.png",
    category: "Node.js",
    date: "2024-11-28",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt:
      "A practical comparison of CSS Grid and Flexbox with real examples, helping you choose the right layout method for your projects.",
    image: "/css-grid-flexbox.png",
    category: "Tutorials",
    date: "2024-11-20",
    readTime: "7 min read",
    featured: false,
  },
  {
    title: "Deploying React Apps: A Complete DevOps Guide",
    excerpt:
      "Step-by-step guide to deploying React applications using modern DevOps practices, CI/CD pipelines, and cloud platforms.",
    image: "/react-deployment-blog.png",
    category: "Tutorials",
    date: "2024-11-15",
    readTime: "9 min read",
    featured: false,
  },
];

interface PostEngagement {
  likes: number;
  isLiked: boolean;
  comments: Array<{ author: string; text: string; timestamp: string }>;
  shares: number;
}

interface BlogPostProps {
  post: (typeof blogPosts)[0];
  isExpanded?: boolean;
  onClose?: () => void;
  engagement: PostEngagement;
  onEngagementUpdate: (engagement: PostEngagement) => void;
}

function FullArticleModal({
  post,
  engagement,
  onEngagementUpdate,
  onClose,
}: BlogPostProps) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleLike = () => {
    const updated = { ...engagement };
    if (updated.isLiked) {
      updated.likes -= 1;
    } else {
      updated.likes += 1;
    }
    updated.isLiked = !updated.isLiked;
    onEngagementUpdate(updated);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      const updated = { ...engagement };
      updated.comments.push({
        author: "You",
        text: commentText,
        timestamp: new Date().toLocaleTimeString(),
      });
      onEngagementUpdate(updated);
      setCommentText("");
    }
  };

  const handleShare = (platform: string) => {
    const updated = { ...engagement };
    updated.shares += 1;
    onEngagementUpdate(updated);

    const shareUrl = `${window.location.origin}/blog`;
    const text = `Check out "${post.title}" by Cherag Saxena`;

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
        "_blank",
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        "_blank",
      );
    } else if (platform === "whatsapp") {
      window.open(
        `https://wa.me/?text=${encodeURIComponent(text + " " + shareUrl)}`,
        "_blank",
      );
    } else if (platform === "instagram") {
      window.open(`https://www.instagram.com/`, "_blank");
    } else if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
    setShowShareMenu(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-foreground truncate">
            {post.title}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Post Image */}
        <div className="relative w-full h-96">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <CardContent className="p-8 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <div>
                <p className="font-semibold text-foreground">Cherag Saxena</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            {post.featured && (
              <Badge className="bg-accent text-accent-foreground">
                Featured
              </Badge>
            )}
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">{post.category}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </Badge>
          </div>

          {/* Full Content */}
          <div className="prose prose-invert max-w-none space-y-4 text-foreground">
            <h1 className="text-3xl font-serif font-bold text-foreground">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            {(post as any).content ? (
              <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                {(post as any).content}
              </div>
            ) : (
              <p className="text-muted-foreground leading-relaxed">
                This is the full article content. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            )}

            {/* Engagement Stats */}
            <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
              {engagement.likes > 0 && (
                <span className="font-semibold">
                  {engagement.likes} likes •{" "}
                </span>
              )}
              {engagement.comments.length > 0 && (
                <span className="font-semibold">
                  {engagement.comments.length} comments •{" "}
                </span>
              )}
              {engagement.shares > 0 && (
                <span className="font-semibold">
                  {engagement.shares} shares
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 border-y py-4 justify-around">
              <Button
                variant="ghost"
                size="sm"
                className={`flex-1 flex items-center justify-center gap-2 ${engagement.isLiked ? "text-red-500" : "text-muted-foreground"}`}
                onClick={handleLike}
              >
                <Heart
                  className={`h-5 w-5 ${engagement.isLiked ? "fill-current" : ""}`}
                />
                {engagement.likes} Likes
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 flex items-center justify-center gap-2 text-muted-foreground"
                onClick={() => setShowComments(!showComments)}
              >
                <MessageCircle className="h-5 w-5" />
                {engagement.comments.length} Comments
              </Button>
              <div className="relative flex-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2 text-muted-foreground"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                >
                  <Share2 className="h-5 w-5" />
                  {engagement.shares} Shares
                </Button>
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleShare("twitter")}
                      className="w-full text-left px-4 py-2 hover:bg-muted text-sm"
                    >
                      Share on Twitter
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="w-full text-left px-4 py-2 hover:bg-muted text-sm"
                    >
                      Share on LinkedIn
                    </button>
                    <button
                      onClick={() => handleShare("whatsapp")}
                      className="w-full text-left px-4 py-2 hover:bg-muted text-sm"
                    >
                      Share on WhatsApp
                    </button>
                    <button
                      onClick={() => handleShare("instagram")}
                      className="w-full text-left px-4 py-2 hover:bg-muted text-sm"
                    >
                      Share on Instagram
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="w-full text-left px-4 py-2 hover:bg-muted text-sm"
                    >
                      Copy Link
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Comments Section */}
            {showComments && (
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-semibold text-foreground">Comments</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {engagement.comments.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No comments yet. Be the first to comment!
                    </p>
                  ) : (
                    engagement.comments.map((comment, idx) => (
                      <div key={idx} className="bg-muted/30 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-semibold text-foreground">
                            {comment.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {comment.timestamp}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {comment.text}
                        </p>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleComment()}
                    className="flex-1 bg-muted/50 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={handleComment}
                  >
                    Post
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function BlogPostCard({
  post,
  engagement,
  onEngagementUpdate,
  onRead,
}: {
  post: (typeof blogPosts)[0];
  engagement: PostEngagement;
  onEngagementUpdate: (engagement: PostEngagement) => void;
  onRead: () => void;
}) {
  return (
    <Card
      className="border-border bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:border-primary/50"
      onClick={onRead}
    >
      <div className="flex">
        {/* Image */}
        <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <CardContent className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                {post.featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <span className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4" /> {engagement.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />{" "}
                {engagement.comments.length}
              </span>
              <span className="flex items-center gap-1">
                <Share2 className="h-4 w-4" /> {engagement.shares}
              </span>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              Continue Reading →
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

export function BlogGrid() {
  const [engagementData, setEngagementData] = useState<
    Record<string, PostEngagement>
  >({});
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  useEffect(() => {
    // Initialize engagement data from localStorage
    const stored = localStorage.getItem("blogEngagement");
    if (stored) {
      setEngagementData(JSON.parse(stored));
    } else {
      const initial: Record<string, PostEngagement> = {};
      blogPosts.forEach((post) => {
        initial[post.title] = {
          likes: 0,
          isLiked: false,
          comments: [],
          shares: 0,
        };
      });
      setEngagementData(initial);
    }
  }, []);

  const handleEngagementUpdate = (
    postTitle: string,
    engagement: PostEngagement,
  ) => {
    const updated = { ...engagementData, [postTitle]: engagement };
    setEngagementData(updated);
    localStorage.setItem("blogEngagement", JSON.stringify(updated));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology
            trends, and career growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post) => (
            <div key={post.title}>
              <BlogPostCard
                post={post}
                engagement={
                  engagementData[post.title] || {
                    likes: 0,
                    isLiked: false,
                    comments: [],
                    shares: 0,
                  }
                }
                onEngagementUpdate={(eng) =>
                  handleEngagementUpdate(post.title, eng)
                }
                onRead={() => setExpandedPost(post.title)}
              />
            </div>
          ))}
        </div>

        {expandedPost && (
          <FullArticleModal
            post={blogPosts.find((p) => p.title === expandedPost)!}
            engagement={
              engagementData[expandedPost] || {
                likes: 0,
                isLiked: false,
                comments: [],
                shares: 0,
              }
            }
            onEngagementUpdate={(eng) =>
              handleEngagementUpdate(expandedPost, eng)
            }
            onClose={() => setExpandedPost(null)}
          />
        )}

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Load More Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
