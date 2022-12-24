import classNames from 'classnames'

export const Panel = ({ children, className, ...props }) => {
  const finalClassnames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  )

  return (
    <div className={finalClassnames} {...props}>
      {children}
    </div>
  )
}
