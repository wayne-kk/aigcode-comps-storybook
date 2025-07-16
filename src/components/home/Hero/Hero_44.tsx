"use client";

// this is a client component
import { useEffect } from "react";
import { Button } from "@ui/button";
import { Shapes, ArrowRight, Plus } from "lucide-react";
import { renderCanvas } from "@ui/renderCanvas";
import BaseLink from "@ui/BaseLink";

interface Hero44Props {
  // 顶部徽章相关
  /** 徽章图标，可以是任何 React 节点 */
  badgeIcon?: React.ReactNode;
  /** 徽章显示的文本内容 */
  badgeText?: string;
  /** 徽章链接的文本 */
  badgeLinkText?: string;
  /** 徽章链接的目标地址 */
  badgeLinkHref?: string;
  
  // 主标题相关
  /** 页面主标题文本 */
  mainTitle?: string;
  
  // 状态指示器
  /** 状态指示器显示的文本 */
  statusText?: string;
  /** 状态指示器的颜色，支持 Tailwind 颜色类名 */
  statusColor?: string;
  
  // 个人介绍
  /** 欢迎文本的前半部分 */
  welcomeText?: string;
  /** 要突出显示的名字 */
  name?: string;
  /** 名字高亮的颜色类名 */
  nameHighlightColor?: string;
  /** 个人描述文本 */
  description?: string;
  
  // 按钮相关
  /** 主要按钮的文本 */
  primaryButtonText?: string;
  /** 主要按钮的链接地址 */
  primaryButtonHref?: string;
  /** 次要按钮的文本 */
  secondaryButtonText?: string;
  /** 次要按钮的链接地址 */
  secondaryButtonHref?: string;
  /** 次要按钮的打开方式（如 _blank 在新窗口打开） */
  secondaryButtonTarget?: string;
}

function Hero_44({
  badgeIcon = <Shapes className="h-5 p-1" />,
  badgeText = "Introducing Dicons.",
  badgeLinkText = "Explore",
  badgeLinkHref = "/products/dicons",
  mainTitle = "Your complete platform for the Design.",
  statusText = "Available Now",
  statusColor = "green",
  welcomeText = "Welcome to my creative playground! I'm",
  name = "Ali",
  nameHighlightColor = "text-ali",
  description = "I craft enchanting visuals for brands, and conjure design resources to empower others.",
  primaryButtonText = "Start Project",
  primaryButtonHref = "/dashboard",
  secondaryButtonText = "Book a call",
  secondaryButtonHref = "https://cal.com/aliimam/designali",
  secondaryButtonTarget = "_blank"
}: Hero44Props) {
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section id="home">
      <div className="animation-delay-8 animate-fadeIn mt-20 flex  flex-col items-center justify-center px-4 text-center md:mt-20">
        <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
          <div className="relative flex items-center whitespace-nowrap rounded-full border bg-popover px-3 py-1 text-xs leading-6  text-primary/60 ">
            {badgeIcon} {badgeText}
            <BaseLink
              href={badgeLinkHref}
              rel="noreferrer"
              className="hover:text-ali ml-1 flex items-center font-semibold"
            >
              <div className="absolute inset-0 flex" aria-hidden="true" />
              {badgeLinkText}{" "}
              <span aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
            </BaseLink>
          </div>
        </div>

        <div className="mb-10 mt-4  md:mt-6">
          <div className="px-2">
            <div className="border-ali relative mx-auto h-full max-w-7xl border p-6 [mask-image:radial-gradient(800rem_96rem_at_center,white,transparent)] md:px-12 md:py-20">
              <h1 className="flex  select-none flex-col  px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -left-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -left-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -right-5 -top-5 h-10 w-10"
                />
                <Plus
                  strokeWidth={4}
                  className="text-ali absolute -bottom-5 -right-5 h-10 w-10"
                />
                {mainTitle}
              </h1>
              <div className="flex items-center justify-center gap-1">
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-${statusColor}-500 opacity-75`}></span>
                  <span className={`relative inline-flex h-2 w-2 rounded-full bg-${statusColor}-500`}></span>
                </span>
                <p className={`text-xs text-${statusColor}-500`}>{statusText}</p>
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-2xl md:text-2xl">
            {welcomeText}{" "}
            <span className={`${nameHighlightColor} font-bold`}>{name} </span>
          </h1>

          <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-primary/60 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
            {description}
          </p>
          <div className="flex justify-center gap-2">
            <BaseLink href={primaryButtonHref}>
              <Button variant="default" size="lg">
                {primaryButtonText}
              </Button>
            </BaseLink>
            <BaseLink href={secondaryButtonHref} target={secondaryButtonTarget} rel="noreferrer">
              <Button variant="outline" size="lg">
                {secondaryButtonText}
              </Button>
            </BaseLink>
          </div>
        </div>
      </div>
      <canvas
        className="bg-skin-base pointer-events-none absolute inset-0 mx-auto"
        id="canvas"
      ></canvas>
    </section>
  );
};

export default Hero_44;
