export const NotFound = () => {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl mb-8">Page not found</p>
          <a 
            href="/" 
            className="cosmic-button"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  };